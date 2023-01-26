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
    <div className="flex w-full max-w-[386.66px] flex-col bg-gray500 p-10">
      <FiShuffle size={48} className="mb-16" />
      <h1 className="mb-6 font-raleway text-2xl font-semibold leading-[1.2] tracking-default">
        {title}
      </h1>
      <p className="mb-14 text-lg leading-[1.6] tracking-default text-white/70">
        {description}
      </p>
      <LearnMoreButton label={buttonText} link={buttonLink} />
    </div>
  )
}
