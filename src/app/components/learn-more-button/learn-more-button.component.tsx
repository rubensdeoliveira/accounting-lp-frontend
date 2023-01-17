import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import { LearnMoreButtonModel } from './models'

export function LearnMoreButton({
  label,
  link,
  ...rest
}: LearnMoreButtonModel) {
  return (
    <button {...rest} className="flex">
      <span className="flex items-center gap-[0.625rem] font-medium leading-[1.3] text-red500 lg:text-base">
        {label}
        <FiArrowRight size={24} />
      </span>
    </button>
  )
}
