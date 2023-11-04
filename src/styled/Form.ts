import styled from 'styled-components';
import { theme } from './theme';

export const Input = styled.input<{ isError?: boolean }>`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  border: ${props => props.isError ? '2px' : '1px' } solid ${props => props.isError ? theme.colors.line.error : theme.colors.line.normal};
  font-size: ${theme.typography.medium.normal.fontSize};
  font-weight: ${theme.typography.medium.normal.fontWeight};
  line-height: ${theme.typography.medium.normal.lineHeight};
  &:focus {
    border: 2px solid ${props => props.isError ? theme.colors.line.error : theme.colors.line.focus} !important;    
  }
  &:focus-visible {
    outline: unset;
  }  
`;

export const Dropdown = styled.select`
  height: 36px;
  padding: ${theme.spacing.a} ${theme.spacing.b};
  margin: 0 ${theme.spacing.b};
  border: 1px solid ${theme.colors.line.normal};
  font-size: ${theme.typography.medium.normal.fontSize};
  font-weight: ${theme.typography.medium.normal.fontWeight};
  line-height: ${theme.typography.medium.normal.lineHeight};
  &:focus {
    border: 2px solid ${theme.colors.line.focus} !important;
  }
  &:focus-visible {
    outline: unset;
  }
`;