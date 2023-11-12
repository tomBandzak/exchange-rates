import styled from 'styled-components';
import { theme } from './theme';
import { InputHTMLAttributes } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement>{
  isError?: boolean;
};
const ErrorInput = ({ isError, ...remaining }: StyledInputProps) => <input {...remaining} />;
export const Input = styled(ErrorInput)`
  padding: ${theme.spacing.a} ${theme.spacing.b};
  margin: 0 ${theme.spacing.d};
  border: ${props => props.isError ? '2px' : '1px' } solid ${props => props.isError ? theme.colors.line.error : theme.colors.line.normal};
  border-radius: 5px;
  font-size: ${theme.typography.medium.normal.fontSize};
  font-weight: ${theme.typography.medium.normal.fontWeight};
  line-height: ${theme.typography.medium.normal.lineHeight};
  &:focus {
    outline: 2px solid ${props => props.isError ? theme.colors.line.error : theme.colors.line.focus} !important;
    border-color: ${props => props.isError ? theme.colors.line.error : theme.colors.line.focus}
  }
  &:focus-visible {
    outline: unset;
  }
  &::placeholder {
    color: ${theme.colors.font.main};
  }
  &:last-child {
    margin-right: ${theme.spacing.b};
  }
  @media (max-width: 840px) {
    margin-left: 0;
  }  
`;

export const SelectOption = styled.span`
  display: flex;
  align-items: center;
`;