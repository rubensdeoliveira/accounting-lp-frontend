import { Button } from '@/application/components'
import Image from 'next/image'
import React from 'react'

export function HeroSection() {
  return (
    <div className="flex items-center justify-between gap-8 mt-16">
      <div className="flex items-center h-hero-image relative overflow-hidden w-1/2">
        <Image
          alt="Jr Contabilidade"
          src={
            'https://images.unsplash.com/photo-1671726203381-641d85af3bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80'
          }
          width={578}
          height={670}
        />
      </div>
      <div className="flex flex-col max-w-hero-texts-container w-1/2">
        <h1 className="text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] font-semibold font-[Raleway] leading-[1.2] tracking-[-0.03em] mb-16">
          Let’s Grow Your Business With My Solution Skills
        </h1>
        <h2 className="text-xl md:text-[1.375rem] lg:text-2xl leading-[1.2] font-medium font-[Raleway] mb-4 tracking-[-0.03em] text-red500">
          Welcome to everyone
        </h2>
        <p className="text-sm md:text-base lg:text-lg leading-[1.6] mb-32 tracking-[-0.03em] text-gray-400">
          Introduce all my name is Madina Amizah a designer who has worked in
          the design world for more than 10 years, ranging from office workers
          to freelance projects from various countries
        </p>
        <div>
          <Button label="Entre em contato" link="/" />
        </div>
      </div>
    </div>
  )
}
