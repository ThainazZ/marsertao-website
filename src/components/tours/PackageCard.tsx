import Image from 'next/image';
import { CardContainer } from './styles';
import IconButton from '@mui/material/IconButton';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

export interface PackageCardProps {
  name: string;
  description: string;
  price: number;
  id: number;
  number: string;
  onClick: () => void;
}

export default function PackageCard({
  name,
  description,
  price,
  id,
  number,
  onClick,
}: PackageCardProps) {
  return (
    <CardContainer>
      <Image
        aria-hidden
        src={`/package${id}.png`}
        alt="Imagem do pacote"
        width={95}
        height={95}
      />
      <h6>{name}</h6>
      <p>{description}</p>
      <p>
        R${price}, para até {number} pessoas
        <IconButton
          onClick={onClick}
          aria-label="Expandir"
          style={{ marginTop: '8px' }}
        >
          <OpenInFullIcon />
        </IconButton>
      </p>
    </CardContainer>
  );
}
