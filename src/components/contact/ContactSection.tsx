'use client';

import {
  ContactContainer,
  ContactWrapper,
  IconWrapper,
  SocialContainer,
} from './styles';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';

export default function ContactSection() {
  return (
    <ContactWrapper>
      <h4>Estamos nas redes:</h4>
      <ContactContainer>
        <SocialContainer>
          <IconWrapper
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </IconWrapper>
          <IconWrapper
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </IconWrapper>

          <IconWrapper
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YouTube />
          </IconWrapper>
        </SocialContainer>
      </ContactContainer>
    </ContactWrapper>
  );
}
