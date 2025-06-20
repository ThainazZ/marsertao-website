import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CarouselHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
  }

  @media screen and (max-width: 708px) {
    justify-content: center;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 36px;
  height: 36px;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: 300px;
  scroll-snap-align: start;
`;

export const CardWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LocationText = styled.p`
  font-size: 0.85rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const Title = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NavButton = styled.button`
  min-width: 45px;
  border: none;
  background: #fff;
  border: 1px solid #ddd;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: 0.2s;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #eee;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#333' : '#ccc')};
  border: none;
  cursor: pointer;
`;
