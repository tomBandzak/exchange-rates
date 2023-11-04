import React from 'react';
import { CurrencyRow } from '../functions/parseCurrencyRow';
import { Col, HeadCol, Row, Table } from '../styled';
import flags from '../assets/flags';

type Props = {
  rates: CurrencyRow[];
}

export const CurrenciesTable = ({ rates }: Props) => <Table>
  <thead>
    <tr>
      <HeadCol />
      <HeadCol width={'50%'}>Country</HeadCol>
      <HeadCol width={'12%'} minwidth={'90px'}>Currency</HeadCol>
      <HeadCol>Amount</HeadCol>
      <HeadCol>Code</HeadCol>
      <HeadCol>Rate</HeadCol>
    </tr>
  </thead>
  <tbody>
  {rates.map(rate => <Row key={rate.currencyCode}><Col><img alt={'flag'} height={35} src={flags[rate.currencyCode]}/></Col>{Object.values(rate).map((col, j) => <Col key={`col-${j}`}>{col}</Col>)}</Row>)}
  </tbody>
</Table>