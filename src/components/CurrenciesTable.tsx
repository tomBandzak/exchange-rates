import React from 'react';
import { CurrencyRow } from '../functions/parseCurrencyRow';
import { Col, HeadCol, Row, Table } from '../styled';
import flags from '../assets/flags';

type Props = {
  exchangedCurrency?: string;
  rates: CurrencyRow[];
  setExchangedCurrency: (currency: string) => void;
}

export const CurrenciesTable = ({ exchangedCurrency, rates, setExchangedCurrency }: Props) => <Table>
  <thead>
    <tr>
      <HeadCol />
      <HeadCol width={'30%'}>Country</HeadCol>
      <HeadCol minWidth={'90px'}>Currency</HeadCol>
      <HeadCol>Amount</HeadCol>
      <HeadCol>Code</HeadCol>
      <HeadCol>Rate</HeadCol>
    </tr>
  </thead>
  <tbody>
  {rates.map(rate => <Row key={rate.currencyCode} selected={exchangedCurrency === rate.currencyCode} onClick={() => setExchangedCurrency(rate.currencyCode)}>
    <Col><img alt={'flag'} height={35} src={flags[rate.currencyCode]}/></Col>
    {Object.values(rate).map((col, j) => <Col key={`col-${j}`}>{col}</Col>)}
  </Row>)}
  </tbody>
</Table>