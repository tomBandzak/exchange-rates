import styled from 'styled-components';

export const XLargeHeading = styled.h1`
  font-size: ${props => props.theme.typography.xLarge.normal.fontSize};
  font-weight: ${props => props.theme.typography.xLarge.normal.fontWeight};
  line-height: ${props => props.theme.typography.xLarge.normal.lineHeight};
`;

export const Description = styled.span`
  color: ${props => props.theme.colors.font.description};
  margin-left: ${props => props.theme.spacing.b};
  font-size: ${props => props.theme.typography.small.normal.fontSize};
  font-weight: ${props => props.theme.typography.small.normal.fontWeight};
  line-height: ${props => props.theme.typography.small.normal.lineHeight};
`;