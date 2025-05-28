import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';
import {
  CardWrapper,
  CardImage,
  CardContent,
  LocationText,
  Title,
  Description,
  SeeMore,
} from './styles';

interface DestinationCardProps {
  name: string;
  id: number;
  description: string;
  location: string;
}

export default function DestinationCard({
  name,
  id,
  description,
  location,
}: DestinationCardProps) {
  return (
    <CardWrapper>
      <CardImage>
        <Image
          src={`/destination${id}.png`}
          alt={`Imagem do destino ${name}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </CardImage>

      <CardContent>
        <LocationText>
          <PlaceIcon />
          {location}
        </LocationText>

        <Title>{name}</Title>
        <Description>{description}</Description>

        <SeeMore>See more →</SeeMore>
      </CardContent>
    </CardWrapper>
  );
}
