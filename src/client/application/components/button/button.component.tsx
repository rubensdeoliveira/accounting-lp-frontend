import React, { useMemo } from 'react'
import { Link } from './components'

import { ButtonModel } from './models'

export function Button({
  label,
  link,
  buttonType = 'dashboard',
  iconLeft: IconLeft,
  iconRight: IconRight,
  type = 'submit',
  ...rest
}: ButtonModel) {
  const renderIconLeft = useMemo(
    () => IconLeft && <IconLeft className="h-6 w-6" />,
    [IconLeft],
  )

  const renderIconRight = useMemo(
    () => IconRight && <IconRight className="h-6 w-6" />,
    [IconRight],
  )

  if (buttonType === 'learnMore') {
    return (
      <Link link={link}>
        <button {...rest} className="flex">
          <span className="flex items-center gap-[0.625rem] text-sm font-medium leading-[1.3] text-[#F50D32] dark:text-red500 md:text-[0.9375rem] lg:text-base">
            {renderIconLeft}
            {label}
            {renderIconRight}
          </span>
        </button>
      </Link>
    )
  }

  if (buttonType === 'dashboard') {
    return (
      <Link link={link}>
        <button className="btn gap-2">
          {renderIconLeft}
          {label}
          {renderIconRight}
        </button>
      </Link>
    )
  }

  return (
    <Link link={link}>
      <button
        {...rest}
        className="flex max-h-12 items-center justify-center rounded-lg bg-red900 px-10 py-4 text-white dark:bg-red500 md:max-h-[3.25rem] lg:max-h-14"
      >
        <span className="text-sm font-medium leading-[1.3] lg:text-base">
          {renderIconLeft}
          {label}
          {renderIconRight}
        </span>
      </button>
    </Link>
  )
}
