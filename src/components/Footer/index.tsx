import React from 'react';
import styled from 'styled-components';

import FaceBookLogo from '@/assets/FacebookLogo.svg';
import InstagramLogo from '@/assets/InstagramLogo.svg';
import TwitterLogo from '@/assets/TwitterLogo.svg';
import VKLogo from '@/assets/VKLogo.svg';

export const FooterWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  box-shadow: ${({ theme }) => theme.boxShadows[0]};
`;
export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 30px;

  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes[0]};
  }
`;
export const FooterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 12px;
`;
export const FooterIcon = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${FaceBookLogo});
  background-repeat: no-repeat;
  background-position: center;
`;
export const FooterInstagramIcon = styled(FooterIcon)`
  background-image: url(${InstagramLogo});
`;
export const FooterTwitterIcon = styled(FooterIcon)`
  background-image: url(${TwitterLogo});
`;
export const FooterVkontakteIcon = styled(FooterIcon)`
  background-image: url(${VKLogo});
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <a href="">about</a>
        <a href="">faq</a>
        <a href="">terms</a>
        <a href="">privacy</a>
        <a href="">contacts</a>
        <a href="">jobs</a>
      </FooterLinks>
      <FooterIconWrapper>
        <a href="">
          <FooterIcon />
        </a>
        <a href="">
          <FooterInstagramIcon />
        </a>
        <a href="">
          <FooterTwitterIcon />
        </a>
        <a href="">
          <FooterVkontakteIcon />
        </a>
        <span>CustomMarket © 2022</span>
      </FooterIconWrapper>
    </FooterWrapper>
  );
};
