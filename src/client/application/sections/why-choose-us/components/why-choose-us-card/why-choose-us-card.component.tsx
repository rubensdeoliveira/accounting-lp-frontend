import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { WhyChooseUsCardModel } from './models'
import { Button } from '@/client/application/components'

export function WhyChooseUsCard({
  buttonLink,
  buttonText,
  description,
  iconType,
  title,
}: WhyChooseUsCardModel) {
  return (
    <div className="flex w-full max-w-[386.66px] flex-col bg-gray900 p-8 dark:bg-gray500 md:p-9 lg:p-10">
      <ArrowRightIcon className="mb-16 h-12 w-12" />
      <h1 className="mb-6 font-raleway text-xl font-medium leading-[1.2] tracking-default text-white md:text-[1.375rem] md:font-semibold lg:text-2xl">
        {title}
      </h1>
      <p className="mb-14 text-base leading-[1.6] tracking-default text-white/70 md:text-[1.0625rem] lg:text-lg">
        {description}
      </p>
      <Button label={buttonText} link={buttonLink} buttonType="learnMore" />
    </div>
  )
}
