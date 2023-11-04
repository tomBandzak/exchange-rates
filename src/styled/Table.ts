import styled from 'styled-components';
import { theme } from './theme';

export const Table = styled.table`
  border-top: 1px solid ${theme.colors.line.normal};
  border-left: 1px solid ${theme.colors.line.normal};
  margin-bottom: ${theme.spacing.c};
  border-spacing: unset;
`;

export const HeadCol = styled.th<{ width?: string, minwidth?: string }>`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  width: ${props => props.width || 'inherit'}
  min-width: ${props => props.minwidth || 'unset'}
  border-right: 1px solid ${theme.colors.line.normal};
  border-bottom: 1px solid ${theme.colors.line.normal};
  background-color: ${theme.colors.background.header};
  color: ${theme.colors.font.main};
  font-size: ${theme.typography.medium.bold.fontSize};
  font-weight: ${theme.typography.medium.bold.fontWeight};
  line-height: ${theme.typography.medium.bold.lineHeight};
`

export const Row = styled.tr`
  &:hover {
    background-color: ${theme.colors.background.hover};
  }
`;

export const Col = styled.td`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  border-right: 1px solid ${theme.colors.line.normal};
  border-bottom: 1px solid ${theme.colors.line.normal};
  color: ${theme.colors.font.main};
  font-size: ${theme.typography.medium.normal.fontSize};
  font-weight: ${theme.typography.medium.normal.fontWeight};
  line-height: ${theme.typography.medium.normal.lineHeight};
`;