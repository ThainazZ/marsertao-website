'use client';
import { Paragraph } from '@/styles/GlobalStyles';
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
        <Paragraph whiteTheme maxWidth="500px">
          Do mar ao sertão, cada trilha conta uma história. Descubra praias
          paradisíacas, falésias imponentes, vilarejos acolhedores e paisagens
          de tirar o fôlego. Viva experiências autênticas em buggy com quem
          conhece cada curva desse paraíso. <br />
          🌴 Embarque com a gente. A aventura começa aqui.
        </Paragraph>
      </ExploreContainer>
      <CardContainer>
        {BeachesData.map((beach) => (
          <BeachCard key={beach.id} id={beach.id} name={beach.name} />
        ))}
      </CardContainer>
    </ExploreWrapper>
  );
}
