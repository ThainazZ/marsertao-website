// PackageModal.tsx
'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';

export interface RoteiroItem {
  titulo: string;
  descricao: string;
  imagem: string;
}

interface PackageModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  roteiro: RoteiroItem[];
}

export default function PackageModal({
  open,
  onClose,
  title,
  roteiro,
}: PackageModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: '16px',
          padding: 2,
          background: 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: 600,
          fontSize: '1.5rem',
          textAlign: 'center',
          color: '#333',
          pb: 1,
        }}
      >
        {title} - O que você vai conhecer ✨
      </DialogTitle>

      <DialogContent
        dividers={false}
        sx={{
          px: 3,
          py: 2,
          display: 'grid',
          gap: 2,
        }}
      >
        {roteiro.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 160 }}
              image={item.imagem}
              alt={item.titulo}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: 0.5,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                {item.titulo}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {item.descricao}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </DialogContent>

      <DialogActions
        sx={{
          justifyContent: 'center',
          pb: 2,
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            borderRadius: '8px',
            px: 3,
            py: 1,
            textTransform: 'none',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #4CAF50, #2e7d32)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(90deg, #45a049, #256d27)',
            },
          }}
        >
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
