import styled from 'styled-components';

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ContactContainer = styled.div`
  display: flex;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 1rem;
`;

export const IconWrapper = styled.a`
  background-color: white;
  border-radius: 50%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;
