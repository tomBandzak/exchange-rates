import { CurrencyRow } from "./parseCurrencyRow";

export const calculateAmountInCurrency = (amountInCZK: number, currency: CurrencyRow): number => amountInCZK / currency.rate  * currency.amount;
export const formatNumber = (num: number): string => Number.isInteger(num) ? num.toString(10) : num.toFixed(3);