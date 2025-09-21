import Image from 'next/image';
import PlaceIcon from '@mui/icons-material/Place';
import {
  CardWrapper,
  CardImage,
  CardContent,
  LocationText,
  Title,
  Description,
} from './styles';

interface DestinationCardProps {
  name: string;
  id: number;
  description: string;
  location: string;
  image: string; 
}

export default function DestinationCard({
  name,
  description,
  location,
  image,
}: DestinationCardProps) {
  return (
    <CardWrapper>
      <CardImage>
        <Image
          src={image}
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
      </CardContent>
    </CardWrapper>
  );
}
