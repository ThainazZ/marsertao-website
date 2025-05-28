import styled from 'styled-components';

const sharedInputStyle = `
  height: 48px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 45px;
  font-size: 1rem;
  background-color: white;
  color: #333;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const ExploreWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  background-image: url('/container-bg-2.png');
  background-size: cover;
`;

export const ExploreTitle = styled.h2`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  text-transform: uppercase;
`;

export const ExploreContainer = styled.div`
  display: flex;
  max-width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  gap: 1rem;
`;

export const BeachCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  gap: 0.5rem;
  align-items: center;
`;

export const Button = styled.button`
  ${sharedInputStyle}
  background-color: rgb(253, 7, 212);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 100px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(184, 32, 158);
  }
`;
