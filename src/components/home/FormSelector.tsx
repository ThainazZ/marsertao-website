'use client';

import { useState } from 'react';
import {
  Container,
  Divider,
  FormField,
  FormWrapper,
  WhatsAppButton,
} from './styles';
import {
  CalendarToday,
  Group,
  LocationOn,
  WhatsApp,
} from '@mui/icons-material';
import dayjs from 'dayjs';
import { MenuItem, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function FormSelector() {
  const [packageOption, setPackageOption] = useState('Litoral Sul');
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const [people, setPeople] = useState('2');

  const openWhatsApp = () => {
    const formattedDate = date?.format('DD/MM/YYYY') || 'a definir';
    const pacote = packageOption || 'a definir';
    const quantidade = people || 'a definir';

    const text = `Olá! Quero agendar um passeio:\n- Pacote: ${pacote}\n- Data: ${formattedDate}\n- Pessoas: ${quantidade}`;
    const url = `https://wa.me/5583993969724?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
      <FormWrapper>
        <FormField>
          <LocationOn />
          <div className="field-content">
            <span className="field-label">Pacote</span>
            <TextField
              select
              fullWidth
              variant="standard"
              value={packageOption}
              onChange={(e) => setPackageOption(e.target.value)}
              className="input-field"
              placeholder="Escolha o pacote"
            >
              <MenuItem value="Litoral Sul">Litoral Sul</MenuItem>
              <MenuItem value="Litoral Norte">Litoral Norte</MenuItem>
              <MenuItem value="Pôr do Sol">Pôr do Sol</MenuItem>
            </TextField>
          </div>
        </FormField>

        <FormField>
          <CalendarToday />
          <div className="field-content">
            <span className="field-label">Data</span>
            <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              format="DD/MM/YYYY"
              slotProps={{
                textField: { variant: 'standard', fullWidth: true },
              }}
            />
          </div>
        </FormField>

        <FormField>
          <Group />
          <div className="field-content">
            <span className="field-label">Integrantes</span>
            <TextField
              select
              fullWidth
              variant="standard"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="input-field"
              placeholder="Quantidade"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} pessoa{num > 1 ? 's' : ''}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </FormField>

        <Divider />

        <WhatsAppButton onClick={openWhatsApp}>
          <WhatsApp />
          <div className="field-content">
            <span className="field-label">Agendar</span>
            <span className="field-placeholder">Atendimento humano</span>
          </div>
        </WhatsAppButton>
      </FormWrapper>
    </Container>
  );
}
