import { CurrencyRow } from "./parseCurrencyRow";

export const calculateAmountInCurrency = (amountInCZK: number, currency: CurrencyRow) => amountInCZK / currency.rate  * currency.amount;
export const formatNumber = (num: number) => Number.isInteger(num) ? num : num.toFixed(3);