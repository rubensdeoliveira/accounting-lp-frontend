import React from 'react'

import { SectionInfo } from '@/app/presentation/components'
import { WhyChooseUsCard } from './components'

export function WhyChooseUsSection() {
  return (
    <div className="flex flex-col items-end justify-between gap-[4.5rem]">
      <SectionInfo />
      <div className="m-[0 auto] flex w-full flex-wrap items-center justify-center gap-5">
        <WhyChooseUsCard />
        <WhyChooseUsCard />
        <WhyChooseUsCard />
      </div>
    </div>
  )
}
