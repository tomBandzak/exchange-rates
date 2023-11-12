import React, { useState } from 'react';
import './App.css';
import { CurrenciesTable, ExchangeCalculator } from './components';
import { getExchangeRates } from './request/ratesRequest';
import { QueryClient, useQuery } from '@tanstack/react-query';
import {Box, Description, Page, theme, XLargeHeading} from './styled';
import { pictures } from './assets/images';
import {ThemeProvider} from "styled-components";

function App() {
  const [exchangedCurrency, setExchangedCurrency] = useState<string | undefined>(undefined);

  const queryClient = new QueryClient();
  const { data, isLoading, error } = useQuery({ queryKey: ['exchangeRates'], queryFn: getExchangeRates }, queryClient);

  if (isLoading) {
    return <>
      <div>Loading data...</div>
      <img src={pictures.charging} alt={'charging-dog'} />
    </>;
  }

  return (
    <ThemeProvider theme={theme}>
    <Page>
      <div>
        <XLargeHeading>Czech crowns conversion calculator</XLargeHeading>
        {error || !data ? <>
            <div>Ooops... Something went wrong</div>
            <img src={pictures.sleepy} alt={'sleepy-dog'} />
          </> :
          <>
            <h3>Date {data.date}</h3>
            <Box>
              <Description>Find out the amount of Czech crowns converted to foreign currency</Description>
              {!!data.currencies.length
              && <ExchangeCalculator currencies={data.currencies} exchangedCurrency={exchangedCurrency || data.currencies[0].currencyCode} setExchangedCurrency={setExchangedCurrency}/>}
              <CurrenciesTable rates={data.currencies} exchangedCurrency={exchangedCurrency || data.currencies[0].currencyCode} setExchangedCurrency={setExchangedCurrency} />
            </Box>
          </>}
      </div>
    </Page>
    </ThemeProvider>
  );
}

export default App;