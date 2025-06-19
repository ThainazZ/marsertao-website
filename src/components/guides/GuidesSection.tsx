'use client';

import { GuidesBox, GuidesContainer, GuidesWrapper } from './styles';
import { GuidesData } from '@/constants';
import GuideCard from './GuideCard';

export default function GuidesSection() {
  return (
    <GuidesWrapper>
      <GuidesBox>
        <h4>Com guias que conhecem esse paraíso</h4>
        <GuidesContainer>
          {GuidesData.map((guide) => (
            <GuideCard
              key={guide.id}
              name={guide.name}
              expertise={guide.expertise}
              description={guide.description}
              image={guide.image}
            />
          ))}
        </GuidesContainer>
      </GuidesBox>
    </GuidesWrapper>
  );
}
