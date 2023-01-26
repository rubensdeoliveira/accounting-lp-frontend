import Image from 'next/image'
import React from 'react'

import { Button } from '@/app/_presentation/components'
import { HeroSectionModel } from './models'

export function HeroSection({
  button,
  description,
  title,
  subtitle,
  image,
}: HeroSectionModel) {
  return (
    <div className="mt-16 flex items-center justify-between gap-8">
      <div className="h-hero-image relative flex max-h-[670px] w-1/2 max-w-[578px] items-center overflow-hidden">
        <Image
          alt="Jr Contabilidade"
          src={image.url}
          width={578}
          height={670}
        />
      </div>
      <div className="max-w-hero-texts-container flex w-1/2 flex-col">
        <h1 className="mb-16 font-raleway text-[2.5rem] font-semibold leading-[1.2] tracking-default md:text-[3.2rem] lg:text-[4rem]">
          {title}
        </h1>
        <h2 className="mb-4 font-raleway text-xl font-medium leading-[1.2] tracking-default text-red500 md:text-[1.375rem] lg:text-2xl">
          {subtitle}
        </h2>
        <p className="mb-32 text-sm leading-[1.6] tracking-default text-white/70 md:text-base lg:text-lg">
          {description}
        </p>
        <div>
          <Button label={button.label} link={button.link} />
        </div>
      </div>
    </div>
  )
}
