import styled from 'styled-components';

export const Calculator = styled.div`
  margin-left: ${props => props.theme.spacing.b};
  margin-top: ${props => props.theme.spacing.b};
  margin-bottom: ${props => props.theme.spacing.d};
  display: flex;
  justify-content: left;
  align-items: center;
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

export const Flag = styled.img`
  margin-right: ${props => props.theme.spacing.a};
`;

export const Arrow = styled.span`
  &::before {
    content: '→';
  }
  margin-right: ${props => props.theme.spacing.d};
`;