import Image from 'next/image';
import { BeachCardStyled } from './styles';

interface BeachCardProps {
  name: string;
  id: number;
}

export default function BeachCard({ name, id }: BeachCardProps) {
  return (
    <BeachCardStyled>
      <Image
        aria-hidden
        src={`/praia${id}.png`}
        alt="Imagem da praia"
        width={175}
        height={230}
      />
      <span className="beach-name">{name}</span>
    </BeachCardStyled>
  );
}
