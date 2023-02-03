import Link from 'next/link'
import React, { useMemo } from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'

import { FooterModel } from './models'
import { useSession } from 'next-auth/react'

export function Footer({
  contactLinks,
  description,
  iconButtonLinks,
  title1,
  title2,
}: FooterModel) {
  const { status } = useSession()

  const renderIconButtonLinks = useMemo(
    () =>
      iconButtonLinks.length &&
      iconButtonLinks.map(iconButtonLink => (
        <Link href={iconButtonLink.link} key={iconButtonLink.id}>
          <BeakerIcon className="h-6 w-6 flex-shrink-0" />
        </Link>
      )),
    [iconButtonLinks],
  )

  const renderContactLinks = useMemo(
    () =>
      contactLinks.length &&
      contactLinks.map(contactLink => (
        <Link href={contactLink.link} key={contactLink.id}>
          <div className="flex items-center gap-4">
            <BeakerIcon className="h-6 w-6 flex-shrink-0" />
            <span className="text-sm leading-[1.2] text-black/70 dark:text-white/70 md:text-[0.9375rem] lg:text-base">
              {contactLink.text}
            </span>
          </div>
        </Link>
      )),
    [contactLinks],
  )

  const renderFooterHeader = useMemo(
    () =>
      status === 'unauthenticated' && (
        <div className="flex flex-col justify-between border-b-0 border-b-black/[0.2] dark:border-b-white/[0.08] md:flex-row md:gap-4 md:border-b-2 md:pb-24">
          <div className="flex w-full flex-col gap-10 border-b-2 border-b-black/[0.2] pb-10 dark:border-b-white/[0.08] md:max-w-[478px] md:border-b-0 md:pb-0">
            <h1 className="font-raleway text-xl font-medium leading-[1.2] md:text-[1.375rem] md:font-semibold lg:text-2xl">
              {title1}
            </h1>
            <p className="text-sm leading-[1.2] text-black/70 dark:text-white/70 md:text-[0.9375rem] lg:text-base">
              {description}
            </p>
            <div className="flex items-center gap-4">
              {renderIconButtonLinks}
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 py-10 md:max-w-[293px] md:py-0">
            <h1 className="font-raleway text-xl font-medium leading-[1.2] md:text-[1.375rem] md:font-semibold lg:text-2xl">
              {title2}
            </h1>
            <div className="flex flex-col gap-6">{renderContactLinks}</div>
          </div>
        </div>
      ),
    [status],
  )

  return (
    <footer className="flex flex-col pb-16">
      {renderFooterHeader}
      <p className="border-t-2 border-t-black/[0.2] pt-10 text-center text-xs text-black/70 dark:border-t-white/[0.08] dark:text-white/70 md:text-[0.8125rem] lg:text-sm">
        JR Contabilidade e Sistemas © Criado por{' '}
        <Link
          href="https://rubensdeoliveira.com"
          target="_blank"
          className="font-medium text-red500"
        >
          Rubens de Oliveira
        </Link>
      </p>
    </footer>
  )
}
