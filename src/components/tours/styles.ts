import styled from 'styled-components';

export const PackagesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PackagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 2rem;
  max-width: 350px;
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0.5rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
  }
`;
