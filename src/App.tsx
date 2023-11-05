import React, { useEffect, useState } from 'react';
import './App.css';
import { CurrenciesTable, ExchangeCalculator } from './components';
import { ratesFixture } from './fixtures/ratesFixture';
import { CurrencyRow, parseCurrencyRow } from './functions/parseCurrencyRow';
import { getExchangeRates } from './request/ratesRequest';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { Box, Description, Page, XLargeHeading } from './styled';

function App() {
  const [currencyList, setCurrencyList] = useState<CurrencyRow[]>([]);
  const [exchangedCurrency, setExchangedCurrency] = useState<string | undefined>(undefined);
  const [dateString, setDateString] = useState<string>('');

  const queryClient = new QueryClient();
  const { data, isLoading, error } = useQuery({ queryKey: ['exchangeRates'], queryFn: getExchangeRates }, queryClient);

  useEffect(() => {
    const rates = ratesFixture.split('\n').slice(2).map(row => parseCurrencyRow(row));
    setDateString(ratesFixture.split('\n')[0].split('#')[0]);
    setCurrencyList(rates);
    setExchangedCurrency(rates[0].currencyCode)
    // if (!isLoading && !error && data) {
    //   const rates = data.split('\n').slice(1).map(row => parseCurrencyRow(row));
    //   setDateString(data.split('\n')[0].split('#')[0]);
    //   setCurrencyList(rates);
    //   1setExchangedCurrency(rates[0].currencyCode)
    //   console.log(rates);
    // }
  }, [data]);

  // if (isLoading) {
  //   return <p>Loading exchange rates...</p>;
  // }

  return (
    <Page>
      <div>
        <XLargeHeading>Czech crowns conversion calculator</XLargeHeading>
        {false ? <div>Something went wrong</div> :
          <>
            <h3>Date {dateString}</h3>
            <Box>
              <Description>Find out the amount of Czech crowns converted to foreign currency</Description>
              {currencyList.length && <ExchangeCalculator currencies={currencyList} exchangedCurrency={exchangedCurrency} setExchangedCurrency={setExchangedCurrency}/>}
              <CurrenciesTable rates={currencyList} exchangedCurrency={exchangedCurrency} setExchangedCurrency={setExchangedCurrency} />
            </Box>
          </>}
      </div>
    </Page>
  );
}

export default App;