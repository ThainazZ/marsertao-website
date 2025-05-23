'use client';
import FormSelector from './FormSelector';
import { Container, Subtitle, TextGroup, Title } from './styles';

export default function Form() {
  return (
    <Container>
      <TextGroup>
        <Title>Passeios que conectam paisagens e memórias</Title>
        <Subtitle>Explore as belezas extraordiárias da Paraíba</Subtitle>
      </TextGroup>
      <FormSelector />
    </Container>
  );
}
