import jest from 'jest';
import { CurrencyRow, parseCurrencyRow } from "./parseCurrencyRow";

const hkDollarString = 'Hongkong|dollar|1|HKD|2.996';

const hkDollar: CurrencyRow = {
  country: 'Hongkong',
  currencyName: 'dollar',
  currencyCode: 'HKD',
  amount: 1,
  rate: 2.996
}

describe('parseCurrencyRow', () => {
  it('should parse string into CurrencyRow', () => {
    expect(parseCurrencyRow(hkDollarString)).toEqual(hkDollar);
  })
})