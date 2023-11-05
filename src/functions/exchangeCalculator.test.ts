import jest from 'jest';
import { calculateAmountInCurrency, formatNumber } from "./index";
import { CurrencyRow } from "./parseCurrencyRow";

const hkDollar: CurrencyRow = {
  country: 'Hongkong',
  currencyName: 'dollar',
  currencyCode: 'HKD',
  amount: 1,
  rate: 2.996
}

const huForint: CurrencyRow = {
  country: 'Hungary',
  currencyName: 'forint',
  currencyCode: 'HUF',
  amount: 100,
  rate: 6.431
}

describe('calculateAmountInCurrency', () => {
  it('should convert CZK to currency with amount 1', () => {
    expect(calculateAmountInCurrency(1256, hkDollar).toFixed(3)).toEqual('419.226');
  })

  it('should convert CZK to currency with amount 100', () => {
    expect(calculateAmountInCurrency(1256, huForint).toFixed(3)).toEqual('19530.400');
  })
})

describe('formatNumber', () => {
  it('should format integer without decimals', () => {
    expect(formatNumber(13453)).toEqual('13453');
  })

  it('should format number to 3 decimals decimals', () => {
    expect(formatNumber(1.3455)).toEqual('1.345');
  })
})