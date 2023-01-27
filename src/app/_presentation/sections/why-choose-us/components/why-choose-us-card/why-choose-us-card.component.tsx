import React from 'react'
import { FiShuffle } from 'react-icons/fi'

import { LearnMoreButton } from '@/app/_presentation/components'
import { WhyChooseUsCardModel } from './models'

export function WhyChooseUsCard({
  buttonLink,
  buttonText,
  description,
  iconType,
  title,
}: WhyChooseUsCardModel) {
  return (
    <div className="flex w-full max-w-[386.66px] flex-col bg-gray900 p-8 dark:bg-gray500 md:p-9 lg:p-10">
      <FiShuffle size={48} className="mb-12 text-gray300 md:mb-14 lg:mb-16" />
      <h1 className="mb-6 font-raleway text-xl font-medium leading-[1.2] tracking-default text-white md:text-[1.375rem] md:font-semibold lg:text-2xl">
        {title}
      </h1>
      <p className="mb-14 text-base leading-[1.6] tracking-default text-white/70 md:text-[1.0625rem] lg:text-lg">
        {description}
      </p>
      <LearnMoreButton label={buttonText} link={buttonLink} />
    </div>
  )
}
