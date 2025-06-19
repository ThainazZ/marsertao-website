'use client';

import {
  CardContainer,
  ExploreContainer,
  ExploreTitle,
  ExploreWrapper,
} from './styles';

import { BeachesData } from '@/constants';
import BeachCard from './BeachCard';

export default function ExploreSection() {
  return (
    <ExploreWrapper>
      <ExploreContainer>
        <ExploreTitle>Explore a Paraíba</ExploreTitle>
        <p>
          Do mar ao sertão, cada trilha conta uma história. Viva experiências
          autênticas em buggy com quem conhece cada curva desse paraíso. <br />
          🌴 Embarque com a gente. A aventura começa aqui.
        </p>
      </ExploreContainer>
      <CardContainer>
        {BeachesData.map((beach) => (
          <BeachCard key={beach.id} id={beach.id} name={beach.name} />
        ))}
      </CardContainer>
    </ExploreWrapper>
  );
}
