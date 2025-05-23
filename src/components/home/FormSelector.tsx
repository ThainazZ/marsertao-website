'use client';

import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
} from '@mui/material';
import { Grid } from '@mui/system';

export default function FormSelector() {
  const [packageOption, setPackageOption] = useState('');
  const [date, setDate] = useState<dayjs.Dayjs | null>(null);
  const [people, setPeople] = useState('');

  const openWhatsApp = () => {
    const text = `Olá! Quero agendar um passeio:\n- Pacote: ${packageOption}\n- Data: ${date?.format('DD/MM/YYYY')}\n- Pessoas: ${people}`;
    const url = `https://wa.me/5583999999999?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 4,
          p: 2,
          maxWidth: 1000,
          mx: 0,
          my: 2,
        }}
      >
        <Grid container spacing={3}>
          {/* Pacote */}
          <Grid>
            <FormControl fullWidth>
              <InputLabel id="package-label">Pacote</InputLabel>
              <Select
                id="package-label"
                value={packageOption}
                label="Pacote"
                defaultValue={packageOption}
                onChange={(e) => setPackageOption(e.target.value)}
                startAdornment={<CardTravelIcon sx={{ mr: 1 }} />}
                sx={{ borderRadius: 2, minWidth: 120 }}
              >
                <MenuItem value="praia">Praia</MenuItem>
                <MenuItem value="buggy">Buggy Tour</MenuItem>
                <MenuItem value="pôr-do-sol">Pôr do Sol</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Data */}
          <Grid>
            <DatePicker
              label="Data de preferência"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  InputProps: {
                    startAdornment: <CalendarMonthIcon sx={{ mr: 1 }} />,
                  },
                  sx: { borderRadius: 2 },
                },
              }}
            />
          </Grid>

          {/* Integrantes */}
          <Grid>
            <FormControl fullWidth>
              <InputLabel id="people-label">Integrantes</InputLabel>
              <Select
                labelId="people-label"
                value={people}
                label="Integrantes"
                onChange={(e) => setPeople(e.target.value)}
                startAdornment={<GroupIcon sx={{ mr: 1 }} />}
                sx={{ borderRadius: 2, minWidth: 120 }}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num} pessoa{num > 1 ? 's' : ''}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Botão Agendar */}
          <Grid>
            <Button
              variant="contained"
              color="success"
              onClick={openWhatsApp}
              startIcon={<WhatsAppIcon />}
              sx={{
                borderRadius: 2,
                height: '100%',
                fontWeight: 200,
                fontSize: '1rem',
                textTransform: 'none',
              }}
            >
              Agendar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
}
