import React from 'react'

import { SectionInfo } from '@/application/components'

export function WhyChooseUsSection() {
  return (
    <div className="flex items-end justify-between gap-4 mt-16">
      <SectionInfo />
      <div className="flex flex-col max-w-hero-texts-container">
        <h1 className="text-hero-title font-semibold leading-1.2 tracking-small mb-16">
          Let’s Grow Your Business With My Solution Skills
        </h1>
        <h2 className="text-2xl font-medium leading-1.2 mb-4">
          Welcome to everyone
        </h2>
        <p className="text-lg leading-1.6 mb-32">
          Introduce all my name is Madina Amizah a designer who has worked in
          the design world for more than 10 years, ranging from office workers
          to freelance projects from various countries
        </p>
        <div>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  )
}
