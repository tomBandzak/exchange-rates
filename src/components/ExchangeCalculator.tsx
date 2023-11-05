import React, { useState } from 'react';
import Select from 'react-select';
import { CurrencyRow } from '../functions/parseCurrencyRow';
import { Calculator, Flag, Input, SelectOption, theme } from '../styled';
import { calculateAmountInCurrency, formatNumber } from '../functions';
import flags from '../assets/flags';

type Props = {
  currencies: CurrencyRow[];
  exchangedCurrency?: string;
  setExchangedCurrency: (currency: string) => void;
}

export const ExchangeCalculator = ({ currencies, exchangedCurrency, setExchangedCurrency }: Props) => {
  let inputValidation: NodeJS.Timeout | undefined = undefined;
  // not sure if decimal is accepted as input for calculation - going with string
  const [inputIsError, setInputIsError] = useState<boolean>(false);
  const [exchangedAmount, setExchangedAmount] = useState<string | undefined>(undefined);

  const validateInput = (num: string) => {
    setExchangedAmount(num)
    const parsedNumber = num === '' ? 0 : parseFloat(num);

    clearTimeout(inputValidation);
    inputValidation = setTimeout(() => setInputIsError(isNaN(parsedNumber)), 500);
  }

  const options = currencies.map(currency => ({
    value: currency.currencyCode,
    label: <SelectOption><Flag alt={'flag'} height={35} src={flags[currency.currencyCode]}/>{currency.currencyCode}</SelectOption>
  }));

  const defaultOption = exchangedCurrency ? {
    value: exchangedCurrency,
    label: <SelectOption><Flag alt={'flag'} height={35} src={flags[exchangedCurrency]}/>{exchangedCurrency}</SelectOption>
  } : undefined;

  return <Calculator>
    <Flag alt={'flag'} height={35} src={flags.CZK}/> CZK
    <Input
      type={'text'}
      value={exchangedAmount}
      onChange={e => validateInput(e.target.value)}
      isError={inputIsError}
      placeholder={'0'}
    /> &rarr;
    <Select
      options={options}
      value={defaultOption}
      defaultValue={defaultOption}
      onChange={option => option && setExchangedCurrency(option.value)}
      styles={{
        control: (styles) => ({ ...styles, width: 'fit-content', marginLeft: theme.spacing.d }),
        valueContainer: (styles) => ({ ...styles, padding: `0 ${theme.spacing.b}`})
      }}/>
    <Input
      type={'text'}
      value={formatNumber(calculateAmountInCurrency(parseFloat(exchangedAmount || '') || 0, currencies.find(currency => currency.currencyCode === exchangedCurrency) || currencies[0]) || 0)}
      readOnly={true}
    />
  </Calculator>
}