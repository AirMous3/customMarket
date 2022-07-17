import React from 'react';

import { footerIcons, footerLinks } from '@/components/Footer/config';

import {
  FooterIcon,
  FooterIconWrapper,
  FooterLink,
  FooterLinks,
  FooterWrapper,
} from './components';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        {footerLinks.map(({ path, label }) => (
          <FooterLink href={path} rel="noopener noreferrer nofollow">
            {label}
          </FooterLink>
        ))}
      </FooterLinks>
      <FooterIconWrapper>
        {footerIcons.map(({ icon, path }) => (
          <a href={path} target="_blank" rel="noopener noreferrer nofollow">
            <FooterIcon icon={icon} />
          </a>
        ))}
        <span>CustomMarket © 2022</span>
      </FooterIconWrapper>
    </FooterWrapper>
  );
};
