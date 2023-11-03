import React, { useEffect, useState } from 'react';
import './App.css';
import { CurrenciesTable } from "./components/CurrenciesTable";
import { ExchangeCalculator } from "./components/ExchangeCalculator";
import { ratesFixture } from "./fixtures/ratesFixture";
import { CurrencyRow, parseCurrencyRow } from "./functions/parseCurrencyRow";
import { getExchangeRates } from "./request/ratesRequest";
import { QueryClient, useQuery } from "@tanstack/react-query";

function App() {
  const [currencyList, setCurrencyList] = useState<CurrencyRow[]>([]);
  const [dateString, setDateString] = useState<string>('');

  const queryClient = new QueryClient();
  const { data, isLoading, error } = useQuery({ queryKey: ['exchangeRates'], queryFn: getExchangeRates }, queryClient);

  useEffect(() => {
    // const rates = ratesFixture.split('\n').slice(1).map(row => parseCurrencyRow(row));
    // setDateString(ratesFixture.split('\n')[0].split('#')[0]);
    // setCurrencyList(rates);
    if (!isLoading && !error && data) {
      const rates = data.split('\n').slice(1).map(row => parseCurrencyRow(row));
      setDateString(data.split('\n')[0].split('#')[0]);
      setCurrencyList(rates);
      console.log(rates);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading exchange rates...</p>;
  }

  return (
    <>
      <div>
        <h1>Exchange course tool</h1>
        {!currencyList.length ? <div>Something went wrong</div> :
          <>
            <h3>Date {dateString}</h3>
            <CurrenciesTable rates={currencyList}/></>}
      </div>
      {currencyList.length && <ExchangeCalculator currencies={currencyList} />}
    </>
  );
}

export default App;