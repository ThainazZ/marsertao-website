'use client';
import { useState } from 'react';
import { DestinationsData } from '@/constants';
import DestinationCard from './DestinationCard';
import {
  CarouselWrapper,
  CardsContainer,
  NavButton,
  DotsContainer,
  Dot,
} from './styles';

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const totalPages = Math.ceil(DestinationsData.length / cardsPerPage);
  const currentPage = Math.floor(currentIndex / cardsPerPage);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - cardsPerPage);
  };

  const handleNext = () => {
    if (currentIndex + cardsPerPage < DestinationsData.length) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  return (
    <CarouselWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h6>Os destinos mais encantadores</h6>
        <div>
          <NavButton onClick={handlePrev} disabled={currentIndex === 0}>
            ⟨
          </NavButton>
          <NavButton
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= DestinationsData.length}
          >
            ⟩
          </NavButton>
        </div>
      </div>

      <CardsContainer>
        {DestinationsData.slice(currentIndex, currentIndex + cardsPerPage).map(
          (destination) => (
            <DestinationCard key={destination.id} {...destination} />
          )
        )}
      </CardsContainer>

      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot
            key={index}
            active={index === currentPage}
            onClick={() => setCurrentIndex(index * cardsPerPage)}
          />
        ))}
      </DotsContainer>
    </CarouselWrapper>
  );
}
