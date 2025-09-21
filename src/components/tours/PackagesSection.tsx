'use client';

import { PackagesData } from '@/constants';
import PackageCard from './PackageCard';
import { PackagesContainer, PackagesWrapper } from './styles';
import { useState } from 'react';
import PackageModal from './PackageModal';

export default function PackagesAvailable() {
  const [selectedPackage, setSelectedPackage] = useState<
    null | (typeof PackagesData)[0]
  >(null);

  return (
    <PackagesWrapper>
      <h3>Qual pacote combina mais com você?</h3>
      <PackagesContainer>
        {PackagesData.map((packageData) => (
          <PackageCard
            name={packageData.name}
            description={packageData.description}
            price={packageData.price}
            key={packageData.id}
            id={packageData.id}
            number={packageData.number}
            onClick={() => setSelectedPackage(packageData)}
          />
        ))}
      </PackagesContainer>

      {selectedPackage && (
        <PackageModal
          open={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          title={selectedPackage.name}
          roteiro={selectedPackage.roteiro}
        />
      )}
    </PackagesWrapper>
  );
}
