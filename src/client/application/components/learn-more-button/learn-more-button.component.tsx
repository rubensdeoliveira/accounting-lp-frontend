import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { LearnMoreButtonModel } from './models'

export function LearnMoreButton({
  label,
  link,
  ...rest
}: LearnMoreButtonModel) {
  return (
    <button {...rest} className="flex">
      <span className="flex items-center gap-[0.625rem] text-sm font-medium leading-[1.3] text-[#F50D32] dark:text-red500 md:text-[0.9375rem] lg:text-base">
        {label}
        <ArrowRightIcon />
      </span>
    </button>
  )
}
