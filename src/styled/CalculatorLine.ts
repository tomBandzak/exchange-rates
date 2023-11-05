import styled from 'styled-components';
import { theme } from './theme';

export const Calculator = styled.div`
  margin-left: ${theme.spacing.b};
  margin-top: ${theme.spacing.b};
  margin-bottom: ${theme.spacing.d};
  display: flex;
  justify-content: left;
  align-items: center;
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const Flag = styled.img`
  margin-right: 5px;
`;

export const Arrow = styled.span`
  &::before {
    content: '→';
  }
  margin-right: ${theme.spacing.d};
`;