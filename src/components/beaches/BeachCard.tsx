import Image from 'next/image';
import { BeachCardStyled } from './styles';

interface BeachCardProps {
  name: string;
  image: string;
}

export default function BeachCard({ name, image }: BeachCardProps) {
  return (
    <BeachCardStyled>
      <Image
        aria-hidden
        src={image}
        alt="Imagem da praia"
        width={175}
        height={230}
        style={{ borderRadius: '24px' }}
      />
      <span className="beach-name">{name}</span>
    </BeachCardStyled>
  );
}
