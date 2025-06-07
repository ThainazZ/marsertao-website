'use client';
import { LocalizationProvider } from '@mui/x-date-pickers';
import FormSelector from './FormSelector';
import { Container, Subtitle, TextGroup, Title } from './styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Form() {
  return (
    <Container>
      <TextGroup>
        <Title>Passeios que conectam paisagens e memórias</Title>
        <Subtitle>Explore as belezas extraordiárias da Paraíba</Subtitle>
      </TextGroup>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <FormSelector />
      </LocalizationProvider>
    </Container>
  );
}
