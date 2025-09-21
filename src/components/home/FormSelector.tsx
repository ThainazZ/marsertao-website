'use client';

import { useState, useEffect } from 'react';
import { Container, FormField, FormWrapper, WhatsAppButton } from './styles';
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
  const bugueiros = [
    { nome: 'Itauhy', telefone: '5583999527427' },
    { nome: 'Ivysson', telefone: '5583991792490' },
    { nome: 'Elektra', telefone: '5583991047764' },
  ];

  // default para o primeiro bugueiro
  const [packageOption, setPackageOption] = useState('Litoral Sul');
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const [people, setPeople] = useState('2');
  const [guide, setGuide] = useState(bugueiros[0].nome);
  const [selectedPhone, setSelectedPhone] = useState(bugueiros[0].telefone);

  // sempre que o guia mudar, atualiza o telefone
  useEffect(() => {
    const bugueiro = bugueiros.find((b) => b.nome === guide);
    if (bugueiro) {
      setSelectedPhone(bugueiro.telefone);
    }
  }, [guide]);

  const openWhatsApp = () => {
    const formattedDate = date?.format('DD/MM/YYYY') || 'a definir';
    const pacote = packageOption || 'a definir';
    const quantidade = people || 'a definir';

    const text = `Olá! Quero agendar um passeio:\n- Pacote: ${pacote}\n- Data: ${formattedDate}\n- Pessoas: ${quantidade}\n- Guia: ${guide}`;
    const url = `https://wa.me/${selectedPhone}?text=${encodeURIComponent(text)}`;
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
              type="number"
              fullWidth
              variant="standard"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="input-field"
              inputProps={{
                min: 1,
                max: 10,
              }}
              placeholder="Quantidade"
            />
          </div>
        </FormField>

        <FormField>
          <WhatsApp />
          <div className="field-content">
            <span className="field-label">Guia</span>
            <TextField
              select
              fullWidth
              variant="standard"
              value={guide}
              onChange={(e) => setGuide(e.target.value)}
              className="input-field"
            >
              {bugueiros.map((b) => (
                <MenuItem key={b.telefone} value={b.nome}>
                  {b.nome}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </FormField>

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
