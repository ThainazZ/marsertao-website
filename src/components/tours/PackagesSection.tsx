'use client';

import { PackagesData } from '@/constants';
import PackageCard from './PackageCard';
import { PackagesContainer, PackagesWrapper } from './styles';

export default function PackagesAvailable() {
  return (
    <PackagesWrapper>
      <h6>Qual pacote combina mais com você?</h6>
      <PackagesContainer>
        {PackagesData.map((packageData) => (
          <PackageCard
            name={packageData.name}
            description={packageData.description}
            price={packageData.price}
            key={packageData.id}
            id={packageData.id}
          />
        ))}
      </PackagesContainer>
    </PackagesWrapper>
  );
}
