import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: #f9f9f9;
  min-width: 300px;
  max-height: 520px;
  border-radius: 60px;

  .image {
    border-radius: 50%;
    position: relative;
    width: 140px;
    height: 140px;
    top: -80px;
  }

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 10px;
    max-width: 300px;
  }
`;

export const GuidesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3rem;
`;

export const GuidesWrapper = styled.div``;

export const GuidesBox = styled.div`
  width: 100%;
  gap: 4rem;
  display: flex;
  padding: 5rem;
  align-items: flex-start;
  flex-direction: column;
`;
