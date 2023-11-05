import styled from 'styled-components';
import { theme } from './theme';

export const XLargeHeading = styled.h1`
  font-size: ${theme.typography.xLarge.normal.fontSize};
  font-weight: ${theme.typography.xLarge.normal.fontWeight};
  line-height: ${theme.typography.xLarge.normal.lineHeight};
`;

export const Description = styled.span`
  color: ${theme.colors.font.description};
  margin-left: ${theme.spacing.b};
  font-size: ${theme.typography.small.normal.fontSize};
  font-weight: ${theme.typography.small.normal.fontWeight};
  line-height: ${theme.typography.small.normal.lineHeight};
`;