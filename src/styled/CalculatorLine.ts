import styled from 'styled-components';
import { theme } from './theme';

export const Calculator = styled.div`
  margin-left: ${theme.spacing.b};
  margin-top: ${theme.spacing.b};
  margin-bottom: ${theme.spacing.d};
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Flag = styled.img`
  margin-right: 5px;
`;