import Image from 'next/image';
import { CardContainer } from './styles';

export interface PackageCardProps {
  name: string;
  description: string;
  price: number;
  id: number;
}

export default function PackageCard({
  name,
  description,
  price,
  id,
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
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </CardContainer>
  );
}
