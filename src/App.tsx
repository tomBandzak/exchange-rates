import React, { useEffect, useState } from 'react';
import './App.css';
import { CurrenciesTable, ExchangeCalculator } from './components';
import { CurrencyRow, parseCurrencyRow } from './functions/parseCurrencyRow';
import { getExchangeRates } from './request/ratesRequest';
import { QueryClient, useQuery } from '@tanstack/react-query';
import { Box, Description, Page, XLargeHeading } from './styled';
import { pictures } from './assets/images';

function App() {
  const [currencyList, setCurrencyList] = useState<CurrencyRow[]>([]);
  const [exchangedCurrency, setExchangedCurrency] = useState<string | undefined>(undefined);
  const [dateString, setDateString] = useState<string>('');

  const queryClient = new QueryClient();
  const { data, isLoading, error } = useQuery({ queryKey: ['exchangeRates'], queryFn: getExchangeRates }, queryClient);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const rates = data.split('\n').slice(2).filter(Boolean).map(row => parseCurrencyRow(row));
      setDateString(data.split('\n')[0].split('#')[0]);
      setCurrencyList(rates);
      setExchangedCurrency(rates[0].currencyCode)
    }
  }, [data]);

  if (isLoading) {
    return <>
      <div>Loading data...</div>
      <img src={pictures.charging} alt={'charging-dog'} />
    </>;
  }

  return (
    <Page>
      <div>
        <XLargeHeading>Czech crowns conversion calculator</XLargeHeading>
        {error ? <>
            <div>Ooops... Something went wrong</div>
            <img src={pictures.sleepy} alt={'sleepy-dog'} />
          </> :
          <>
            <h3>Date {dateString}</h3>
            <Box>
              <Description>Find out the amount of Czech crowns converted to foreign currency</Description>
              {!!currencyList.length
              && <ExchangeCalculator currencies={currencyList} exchangedCurrency={exchangedCurrency} setExchangedCurrency={setExchangedCurrency}/>}
              <CurrenciesTable rates={currencyList} exchangedCurrency={exchangedCurrency} setExchangedCurrency={setExchangedCurrency} />
            </Box>
          </>}
      </div>
    </Page>
  );
}

export default App;