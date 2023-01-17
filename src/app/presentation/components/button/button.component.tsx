import React from 'react'

import { ButtonModel } from './models'

export function Button({ label, link, ...rest }: ButtonModel) {
  return (
    <button
      {...rest}
      className="rounded-lg bg-red500 px-10 py-[0.9375rem] lg:py-[1.09rem]"
    >
      <span className="text-sm font-medium leading-[1.3] lg:text-base">
        {label}
      </span>
    </button>
  )
}
