import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [coursesList, setCoursesList] = useState<string[]>([])
  const getExchangeCourse = async () => {
    const resp = await fetch('https://cors-anywhere.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
    console.log(resp);
    if(resp.ok) {
      const text = await resp.text();
      setCoursesList(text.split('\n'));
    } else {
      setCoursesList([]);
    }
  }

  useEffect(() => {
    getExchangeCourse();
    // setCoursesList(coursesFixture.split('\n'));
  }, []);

  return (
    <div>
      <h1>Exchange course tool</h1>
      {!coursesList.length && <div>Something went wrong</div>}
      <h3>Date {coursesList[0].split('#')[0]}</h3>
      <table>
      {coursesList.slice(1).map(course => <tr>{course.split('|').map(col => <td>{col}</td>)}</tr>)}
      </table>
    </div>
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