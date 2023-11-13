import styled from 'styled-components';
import { InputHTMLAttributes } from "react";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement>{
  isError?: boolean;
}
const ErrorInput = ({ isError, ...remaining }: StyledInputProps) => <input {...remaining} />;
export const Input = styled(ErrorInput)`
  padding: ${props => props.theme.spacing.a} ${props => props.theme.spacing.b};
  margin: 0 ${props => props.theme.spacing.d};
  border: ${props => props.isError ? '2px' : '1px' } solid ${props => props.isError ? props.theme.colors.line.error : props.theme.colors.line.normal};
  border-radius: 5px;
  font-size: ${props => props.theme.typography.medium.normal.fontSize};
  font-weight: ${props => props.theme.typography.medium.normal.fontWeight};
  line-height: ${props => props.theme.typography.medium.normal.lineHeight};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  &:focus {
    outline: 2px solid ${props => props.isError ? props.theme.colors.line.error : props.theme.colors.line.focus} !important;
    border-color: ${props => props.isError ? props.theme.colors.line.error : props.theme.colors.line.focus}
  }
  &:focus-visible {
    outline: unset;
  }
  &::placeholder {
    color: ${props => props.theme.colors.font.main};
  }
  &:last-child {
    margin-right: ${props => props.theme.spacing.b};
  }
  @media (max-width: 700px) {
    margin-left: 0;
  }  
`;

export const SelectOption = styled.span`
  display: flex;
  align-items: center;
`;