import Image from 'next/image'
import React from 'react'

import { Button } from '@rubensdeoliveira-ui/react'
import { HeroSectionModel } from './models'

export function HeroSection({
  button,
  description,
  title,
  subtitle,
  image,
}: HeroSectionModel) {
  return (
    <div className="mt-16 flex flex-col items-center justify-between gap-8 md:flex-row xl:items-end">
      <div className="h-hero-image relative flex max-h-[670px] w-full max-w-[578px] items-center overflow-hidden md:w-1/2">
        <Image
          alt="Jr Contabilidade"
          src={image.url}
          width={578}
          height={670}
          priority
        />
      </div>
      <div className="flex w-full max-w-[578px] flex-col md:w-1/2 md:max-w-[527px]">
        <h1 className="mb-10 font-raleway text-[2.5rem] font-semibold leading-[1.2] tracking-default md:mb-[3.25rem] md:text-[3.25rem] lg:mb-16 lg:text-[4rem]">
          {title}
        </h1>
        <h2 className="mb-4 font-raleway text-xl font-medium leading-[1.2] tracking-default text-red900 dark:text-red500 md:text-[1.375rem] lg:text-2xl">
          {subtitle}
        </h2>
        <p className="mb-16 text-base leading-[1.6] tracking-default text-black/70 dark:text-white/70 md:mb-24 md:text-[1.0625rem] lg:mb-32 lg:text-lg">
          {description}
        </p>
        <div>
          <Button label={button.label} />
        </div>
      </div>
    </div>
  )
}
