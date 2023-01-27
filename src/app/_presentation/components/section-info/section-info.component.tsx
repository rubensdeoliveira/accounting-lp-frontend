import React, { useMemo } from 'react'

import { SectionInfoModel } from './models'

export function SectionInfo({
  title,
  subtitle,
  description,
}: SectionInfoModel) {
  const renderTitle = useMemo(
    () =>
      title && (
        <h2 className="mb-8 text-center font-raleway text-xl font-medium leading-[1.2] tracking-default text-red900 dark:text-red500 md:text-[1.375rem] lg:text-2xl">
          {title}
        </h2>
      ),
    [title],
  )

  return (
    <div className="flex w-full flex-col items-center">
      {renderTitle}
      <h3 className="mb-4 text-center font-raleway text-[2rem] font-semibold leading-[1.2] tracking-default md:text-[2.75rem] lg:text-[3.5rem]">
        {subtitle}
      </h3>
      <p className="max-w-[530px] text-center text-base leading-[1.6] tracking-default text-black/70 dark:text-white/70 md:text-[1.0625rem] lg:text-lg">
        {description}
      </p>
    </div>
  )
}
