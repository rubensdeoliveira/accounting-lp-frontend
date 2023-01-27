import React, { useMemo } from 'react'

import { SectionInfo } from '@/client/application/components'
import { WhyChooseUsCard } from './components'
import { WhyChooseUsSectionModel } from './models'

export function WhyChooseUsSection({
  sectionInfo,
  whyChooseUsCards,
}: WhyChooseUsSectionModel) {
  const renderWhyChooseUsCards = useMemo(
    () =>
      whyChooseUsCards.length > 0 &&
      whyChooseUsCards.map(whyChooseUsCard => (
        <WhyChooseUsCard key={whyChooseUsCard.id} {...whyChooseUsCard} />
      )),
    [whyChooseUsCards],
  )

  return (
    <div className="flex flex-col items-end justify-between gap-16 md:gap-[4.25rem] lg:gap-[4.5rem]">
      <SectionInfo {...sectionInfo} />
      <div className="m-[0 auto] flex w-full flex-wrap items-center justify-center gap-6 md:gap-5">
        {renderWhyChooseUsCards}
      </div>
    </div>
  )
}
