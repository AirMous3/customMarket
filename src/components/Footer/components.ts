import styled from 'styled-components';

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
`;

export const FooterLink = styled.a`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[0]};
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 12px;
`;
export const FooterIcon = styled.div<any>`
  width: 22px;
  height: 22px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
`;
