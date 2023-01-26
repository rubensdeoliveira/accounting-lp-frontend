import Link from 'next/link'
import React from 'react'

import { ButtonModel } from './models'

export function Button({ label, link, className, ...rest }: ButtonModel) {
  return (
    <Link href={link}>
      <button
        {...rest}
        className={`rounded-lg bg-red500 px-10 py-[0.9375rem] dark:bg-black lg:py-[1.09rem] ${className}`}
      >
        <span className="text-sm font-medium leading-[1.3] lg:text-base">
          {label}
        </span>
      </button>
    </Link>
  )
}
