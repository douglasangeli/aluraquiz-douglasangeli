import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: any;
}

export default function Link({ children, href, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
