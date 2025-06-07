'use client';
import { Paragraph } from '@/styles/GlobalStyles';
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
      <Paragraph title whiteTheme>
        Estamos nas redes:
      </Paragraph>
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
