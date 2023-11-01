import React, {useState} from "react";
import {CurrencyRow} from "../App";

const calculateAmountInCurrency = (amountInCZK: number, currency: CurrencyRow) => amountInCZK / currency.rate  * currency.amount;

type Props = {
  currencies: CurrencyRow[];
}

export const ExchangeCalculator = ({ currencies }: Props) => {
  const [exchangedAmount, setExchangedAmount] = useState<number>(0);
  const [exchangedCurrency, setExchangedCurrency] = useState<string>('')
  
  return <div>
    <input type={'text'} value={exchangedAmount} onChange={e => setExchangedAmount(parseInt(e.target.value, 10))}/> CZK {'->'} <select
    value={exchangedCurrency || undefined} onChange={e => setExchangedCurrency(e.target.value)}>{currencies.map(currency => <option key={currency.currencyCode}
                                                                                                                                      value={currency.currencyCode}>{currency.currencyCode}</option>)}</select>
    <input type={"number"}
           value={calculateAmountInCurrency(exchangedAmount, currencies.find(currency => currency.currencyCode === exchangedCurrency) || currencies[0])}/>
  </div>
}