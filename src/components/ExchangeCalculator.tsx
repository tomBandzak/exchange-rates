import React, { useState } from 'react';
import Select from 'react-select';
import { CurrencyRow } from '../functions/parseCurrencyRow';
import {Arrow, Calculator, Flag, Input, SelectOption, theme} from '../styled';
import { calculateAmountInCurrency, formatNumber } from '../functions';
import flags from '../assets/flags';

type Props = {
  currencies: CurrencyRow[];
  exchangedCurrency?: string;
  setExchangedCurrency: (currency: string) => void;
}

export const ExchangeCalculator = ({ currencies, exchangedCurrency, setExchangedCurrency }: Props) => {
  const [exchangedAmount, setExchangedAmount] = useState<number | undefined>(undefined);

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
      type={'number'}
      value={exchangedAmount}
      onChange={e => setExchangedAmount(Number.parseFloat(e.target.value))}
      placeholder={'0'}
    /> <Arrow />
    <Select
      options={options}
      value={defaultOption}
      defaultValue={defaultOption}
      onChange={option => option && setExchangedCurrency(option.value)}
      styles={{
        control: (styles) => ({ ...styles, width: 'fit-content', minWidth: '100px' }),
        valueContainer: (styles) => ({ ...styles, padding: `0 ${theme.spacing.b}`})
      }}/>
    <Input
      type={'text'}
      value={formatNumber(calculateAmountInCurrency(exchangedAmount || 0, currencies.find(currency => currency.currencyCode === exchangedCurrency) || currencies[0]) || 0)}
      readOnly={true}
    />
  </Calculator>
}