import styled from 'styled-components';

export const Page = styled.div`
  padding-left: ${props => props.theme.spacing.d};
  padding-bottom: ${props => props.theme.spacing.d};
`;

export const Box = styled.div`
  border-radius: 10px;
  background-color: ${props => props.theme.colors.background.main};
  width: fit-content;
  padding: ${props => props.theme.spacing.b} 0;
`;