export type CurrencyRow = {
  country: string;
  currencyName: string;
  currencyCode: string;
  amount: number;
  rate: number;
}

export const parseCurrencyRow = (currency: string): CurrencyRow => {
  const columns = currency.split('|');
  return {
    country: columns[0],
    currencyName: columns[1],
    currencyCode: columns[3],
    amount: parseInt(columns[2], 10),
    rate: parseFloat(columns[4])
  }
}

