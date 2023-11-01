import React from "react";
import {CurrencyRow} from "../App";

type Props = {
  rates: CurrencyRow[];
}

export const CurrenciesTable = ({ rates }: Props) => <table>
  <tbody>
  {rates.slice(1).map(rate => <tr key={rate.currencyCode}>{Object.values(rate).map((col, j) => <td key={`col-${j}`}>{col}</td>)}</tr>)}
  </tbody>
</table>