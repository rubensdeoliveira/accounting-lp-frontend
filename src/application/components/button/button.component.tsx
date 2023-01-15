import React from 'react'

import { ButtonModel } from './models'

export function Button({ label, link, ...rest }: ButtonModel) {
  return (
    <button
      {...rest}
      className="px-10 py-[0.9375rem] lg:py-[1.09rem] rounded-lg bg-red500"
    >
      <span className="text-sm lg:text-base font-medium leading-[1.3]">
        {label}
      </span>
    </button>
  )
}
