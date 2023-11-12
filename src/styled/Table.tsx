import styled from 'styled-components';
import { theme } from './theme';
import {InputHTMLAttributes} from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLTableHeaderCellElement>{
  minWidth?: string;
};

export const Table = styled.table`
  background-color: ${theme.colors.background.main};
  margin-bottom: ${theme.spacing.c};
  border-spacing: unset;
  width: 100%;
`;

const StyledHeaderCell = ({ minWidth, ...remaining }: StyledInputProps) => <th {...remaining} />;
export const HeadCol = styled(StyledHeaderCell)`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  width: ${props => props.width || 'fit-content'};
  min-width: ${props => props.minWidth || 'unset'};
  border-top: 1px solid ${theme.colors.line.normal};
  border-bottom: 1px solid ${theme.colors.line.normal};
  color: ${theme.colors.font.main};
  font-size: ${theme.typography.medium.bold.fontSize};
  font-weight: ${theme.typography.medium.bold.fontWeight};
  line-height: ${theme.typography.medium.bold.lineHeight};
  text-align: left;
`

export const Row = styled.tr<{ selected?: boolean }>`
  background-color: ${(props) => props.selected ? theme.colors.background.header : 'inherit'};
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.background.hover};
  }
`;

export const Col = styled.td`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  border-bottom: 1px solid ${theme.colors.line.normal};
  color: ${theme.colors.font.main};
  font-size: ${theme.typography.medium.normal.fontSize};
  font-weight: ${theme.typography.medium.normal.fontWeight};
  line-height: ${theme.typography.medium.normal.lineHeight};
`;