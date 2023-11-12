import styled from 'styled-components';
import {InputHTMLAttributes} from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLTableHeaderCellElement>{
  minWidth?: string;
}

export const Table = styled.table`
  background-color: ${props => props.theme.colors.background.main};
  margin-bottom: ${props => props.theme.spacing.c};
  border-spacing: unset;
  width: 100%;
`;

const StyledHeaderCell = ({ minWidth, ...remaining }: StyledInputProps) => <th {...remaining} />;
export const HeadCol = styled(StyledHeaderCell)`
  padding: ${props => props.theme.spacing.a} ${props => props.theme.spacing.b};
  width: ${props => props.width || 'fit-content'};
  min-width: ${props => props.minWidth || 'unset'};
  border-top: 1px solid ${props => props.theme.colors.line.normal};
  border-bottom: 1px solid ${props => props.theme.colors.line.normal};
  color: ${props => props.theme.colors.font.main};
  font-size: ${props => props.theme.typography.medium.bold.fontSize};
  font-weight: ${props => props.theme.typography.medium.bold.fontWeight};
  line-height: ${props => props.theme.typography.medium.bold.lineHeight};
  text-align: left;
`

export const Row = styled.tr<{ selected?: boolean }>`
  background-color: ${(props) => props.selected ? props => props.theme.colors.background.header : 'inherit'};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }
`;

export const Col = styled.td`
  padding: ${props => props.theme.spacing.a} ${props => props.theme.spacing.b};
  border-bottom: 1px solid ${props => props.theme.colors.line.normal};
  color: ${props => props.theme.colors.font.main};
  font-size: ${props => props.theme.typography.medium.normal.fontSize};
  font-weight: ${props => props.theme.typography.medium.normal.fontWeight};
  line-height: ${props => props.theme.typography.medium.normal.lineHeight};
`;