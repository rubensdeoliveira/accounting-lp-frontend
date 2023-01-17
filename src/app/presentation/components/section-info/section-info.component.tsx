import React from 'react'

import { SectionInfoModel } from './models'

export function SectionInfo({
  title,
  subtitle,
  description,
}: SectionInfoModel) {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-8 text-center font-raleway text-2xl font-medium leading-[1.2] tracking-default text-red500">
        {title}
      </h2>
      <h3 className="mb-4 text-center font-raleway text-[3.5rem] font-semibold leading-[1.2] tracking-default">
        {subtitle}
      </h3>
      <p className="max-w-[530px] text-center text-lg leading-[1.6] tracking-default text-gray-400">
        {description}
      </p>
    </div>
  )
}
