import Link from 'next/link'
import React from 'react'

import { ButtonModel } from './models'

export function Button({ label, link, className, ...rest }: ButtonModel) {
  return (
    <Link href={link}>
      <button
        {...rest}
        className={`flex max-h-12 items-center justify-center rounded-lg bg-red900 px-10 py-4 text-white dark:bg-red500 md:max-h-[3.25rem] lg:max-h-14 ${className}`}
      >
        <span className="text-sm font-medium leading-[1.3] lg:text-base">
          {label}
        </span>
      </button>
    </Link>
  )
}
