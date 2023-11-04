import React, { useState } from 'react';
import { CurrencyRow } from '../functions/parseCurrencyRow';
import { Calculator, Dropdown, Input } from '../styled';
import { calculateAmountInCurrency, formatNumber } from '../functions';

type Props = {
  currencies: CurrencyRow[];
}

export const ExchangeCalculator = ({ currencies }: Props) => {
  let inputValidation: NodeJS.Timeout | undefined = undefined;
  // not sure if decimal is accepted as input for calculation - going with string
  const [inputIsError, setInputIsError] = useState<boolean>(false);
  const [exchangedAmount, setExchangedAmount] = useState<string>('0');
  const [exchangedCurrency, setExchangedCurrency] = useState<string>(currencies[0].currencyCode)

  const validateInput = (num: string) => {
    setExchangedAmount(num)
    const parsedNumber = parseFloat(num);

    clearTimeout(inputValidation);
    inputValidation = setTimeout(() => setInputIsError(isNaN(parsedNumber)), 500);
  }

  return <Calculator>
    <Input
      type={'text'}
      value={exchangedAmount}
      onChange={e => validateInput(e.target.value)}
      isError={inputIsError}
    /> CZK &rarr;
    <Dropdown
      value={exchangedCurrency || undefined}
      onChange={e => setExchangedCurrency(e.target.value)}
    >
      {currencies.map(currency => <option key={currency.currencyCode}
                                          value={currency.currencyCode}>{currency.currencyCode}
                                  </option>)}
    </Dropdown>
    <Input
      type={'text'}
      value={formatNumber(calculateAmountInCurrency(parseFloat(exchangedAmount) || 0, currencies.find(currency => currency.currencyCode === exchangedCurrency) || currencies[0]) || 0)}
      readOnly={true}
    />
  </Calculator>
}