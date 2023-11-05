import styled from 'styled-components';
import { theme } from './theme';

export const Page = styled.div`
  padding-left: ${theme.spacing.d};
  padding-bottom: ${theme.spacing.d};
`;

export const Box = styled.div`
  border-radius: 10px;
  background-color: ${theme.colors.background.main};
  width: fit-content;
  padding: ${theme.spacing.b} 0;
`;