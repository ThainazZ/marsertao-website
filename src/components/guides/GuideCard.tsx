'use client';
import Image from 'next/image';
import { CardContainer } from './styles';

interface GuideCardProps {
  name: string;
  expertise: string;
  description: string;
  image: string;
}

export default function GuideCard({
  name,
  expertise,
  description,
  image,
}: GuideCardProps) {
  return (
    <CardContainer>
      <Image
        aria-hidden
        src={image}
        alt="Imagem do guia"
        width={95}
        height={95}
        className="image"
      />
      <h3>{name}</h3>
      <span>{expertise}</span>
      <p>{description}</p>
    </CardContainer>
  );
}
