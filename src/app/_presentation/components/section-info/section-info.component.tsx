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
        <h2 className="mb-8 text-center font-raleway text-2xl font-medium leading-[1.2] tracking-default text-red500">
          {title}
        </h2>
      ),
    [title],
  )

  return (
    <div className="flex w-full flex-col items-center">
      {renderTitle}
      <h3 className="mb-4 text-center font-raleway text-[3.5rem] font-semibold leading-[1.2] tracking-default">
        {subtitle}
      </h3>
      <p className="max-w-[530px] text-center text-lg leading-[1.6] tracking-default text-white/70">
        {description}
      </p>
    </div>
  )
}
