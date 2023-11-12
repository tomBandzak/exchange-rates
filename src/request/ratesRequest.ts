import { CurrencyRow, parseCurrencyRow } from '../functions/parseCurrencyRow';

type ParsedData = {
  date: string;
  currencies: CurrencyRow[];
}

export const getExchangeRates = async (): Promise<ParsedData | undefined> => {
  const resp = await fetch('https://cors-proxy-node.vercel.app/api?url=https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
  if(resp.ok) {
    const textData = await resp.text();
    return {
      date: textData.split('\n')[0].split('#')[0],
      currencies: textData.split('\n').slice(2).filter(Boolean).map(row => parseCurrencyRow(row))
    };
  }

  return undefined;
}
