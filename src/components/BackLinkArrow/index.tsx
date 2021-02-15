import React from 'react';
import styled from 'styled-components';
import Link from '../Link';

interface StyledLinkProps {
  href: string;
  style: any;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  transition: .3s;
  &:hover {
    opacity: .5;
  }
`;

const SVG = styled.svg`
  vertical-align: middle;
`;

interface BackLinkArrowProps {
  href: string;
}

export default function BackLinkArrow({ href }: BackLinkArrowProps) {
  return (
    <StyledLink href={href} style={{ width: '24px', height: '24px', display: 'inline-block' }}>
      <SVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="white" fillOpacity="0.87" />
      </SVG>
    </StyledLink>
  );
}
