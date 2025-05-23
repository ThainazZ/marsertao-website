import styled from 'styled-components';

const sharedInputStyle = `
  height: 48px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 1rem;
  background-color: white;
  color: #333;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #40916c;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  justify-content: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  min-height: 10vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

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

export const Subtitle = styled.h6`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 200;
  font-size: 24px;
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 1rem;
  max-width: 1000px;
`;

export const FormGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Field = styled.div`
  flex: 1 1 280px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Select = styled.select`
  ${sharedInputStyle}
  appearance: none;
`;

export const Button = styled.button`
  ${sharedInputStyle}
  background-color: #25d366;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1ebe5d;
  }
`;

export const StyledDatePicker = styled.div`
  .MuiInputBase-root {
    ${sharedInputStyle}
    padding: 0;
  }

  input {
    padding: 0 1rem;
  }

  fieldset {
    border: none;
  }
`;
