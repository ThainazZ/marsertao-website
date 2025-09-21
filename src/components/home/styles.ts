import styled from 'styled-components';

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 32px;
`;
// #2794C0

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 200;
  font-size: 24px;
`;

export const Container = styled.section`
  background: white;
  border-radius: 32px 32px 0 0;
  padding: 2rem 5rem 1rem 5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem 2rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 50px;
  border: 1px solid #ddd;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  gap: 1.5rem;

  @media (max-width: 1201px) {
    justify-content: center;
  }
`;

export const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  svg {
    color: #555;
  }

  .field-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 150px;
  }

  .field-label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #222;
  }

  .field-placeholder {
    font-size: 0.85rem;
    color: #999;
  }
`;

export const Divider = styled.span`
  width: 1px;
  height: 2rem;
  background: #ddd;
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #25d366;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 1.5rem;
  }

  .field-content {
    display: flex;
    flex-direction: column;
  }

  .field-label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #222;
  }

  .field-placeholder {
    font-size: 0.85rem;
    color: #999;
  }
`;
