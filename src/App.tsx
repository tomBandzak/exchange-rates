import React, {useEffect, useState} from 'react';
import './App.css';
import {CurrenciesTable} from "./components/CurrenciesTable";
import {ExchangeCalculator} from "./components/ExchangeCalculator";

export type CurrencyRow = {
  country: string;
  currencyName: string;
  currencyCode: string;
  amount: number;
  rate: number;
}

const parseCurrencyRow = (currency: string): CurrencyRow => {
  const columns = currency.split('|');
  return {
    country: columns[0],
    currencyName: columns[1],
    currencyCode: columns[3],
    amount: parseInt(columns[2], 10),
    rate: parseFloat(columns[4])
  }
}

function App() {
  const [currencyList, setCurrencyList] = useState<CurrencyRow[]>([]);
  const [dateString, setDateString] = useState<string>('');

  const getExchangeCourse = async () => {
    const resp = await fetch('https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
    console.log(resp);
    if(resp.ok) {
      const text = await resp.text();
      const rows = text.split('\n');
      setDateString(rows[0].split('#')[0]);
      setCurrencyList(rows.slice(1).map(row => parseCurrencyRow(row)));
    } else {
      setCurrencyList([]);
    }
  }

  useEffect(() => {
    // getExchangeCourse();
    setDateString(coursesFixture.split('\n')[0].split('#')[0]);
    setCurrencyList(coursesFixture.split('\n').slice(1).map(row => parseCurrencyRow(row)));
  }, []);

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

const coursesFixture =
  `01 Nov 2023 #211
  Country|Currency|Amount|Code|Rate
  Australia|dollar|1|AUD|14.912
  Brazil|real|1|BRL|4.665
  Bulgaria|lev|1|BGN|12.623
  Canada|dollar|1|CAD|16.904
  China|renminbi|1|CNY|3.203
  Denmark|krone|1|DKK|3.307
  EMU|euro|1|EUR|24.685
  Hongkong|dollar|1|HKD|2.996
  Hungary|forint|100|HUF|6.431
  Iceland|krona|100|ISK|16.668
  IMF|SDR|1|XDR|30.807
  India|rupee|100|INR|28.149
  Indonesia|rupiah|1000|IDR|1.471
  Israel|new shekel|1|ILS|5.819
  Japan|yen|100|JPY|15.498
  Malaysia|ringgit|1|MYR|4.914
  Mexico|peso|1|MXN|1.303
  New Zealand|dollar|1|NZD|13.666
  Norway|krone|1|NOK|2.093
  Philippines|peso|100|PHP|41.265
  Poland|zloty|1|PLN|5.527
  Romania|leu|1|RON|4.969
  Singapore|dollar|1|SGD|17.099
  South Africa|rand|1|ZAR|1.257
  South Korea|won|100|KRW|1.728
  Sweden|krona|1|SEK|2.091
  Switzerland|franc|1|CHF|25.795
  Thailand|baht|100|THB|64.742
  Turkey|lira|1|TRY|0.827
  United Kingdom|pound|1|GBP|28.398
  USA|dollar|1|USD|23.443`;