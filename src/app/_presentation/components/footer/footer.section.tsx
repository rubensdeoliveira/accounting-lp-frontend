import Link from 'next/link'
import React, { useMemo } from 'react'
import { FiPhone } from 'react-icons/fi'

import { FooterModel } from './models'

export function Footer({
  contactLinks,
  description,
  iconButtonLinks,
  title1,
  title2,
}: FooterModel) {
  const renderIconButtonLinks = useMemo(
    () =>
      iconButtonLinks.length &&
      iconButtonLinks.map(iconButtonLink => (
        <Link href={iconButtonLink.link} key={iconButtonLink.id}>
          <FiPhone size={24} />
        </Link>
      )),
    [iconButtonLinks],
  )

  const renderContactLinks = useMemo(
    () =>
      contactLinks.length &&
      contactLinks.map(contactLink => (
        <Link href={contactLink.link} key={contactLink.id}>
          <div className="flex gap-4">
            <FiPhone size={24} />
            <span>{contactLink.text}</span>
          </div>
        </Link>
      )),
    [contactLinks],
  )

  return (
    <footer className="flex flex-col pb-16">
      <div className="mb-24 flex justify-between">
        <div className="flex w-full max-w-[478px] flex-col gap-10">
          <h1 className="">{title1}</h1>
          <p className="">{description}</p>
          <div className="flex items-center gap-4">{renderIconButtonLinks}</div>
        </div>
        <div className="flex w-full max-w-[293px] flex-col gap-10">
          <h1>{title2}</h1>
          <div className="flex flex-col gap-6">{renderContactLinks}</div>
        </div>
      </div>
      <div className="mb-[2.5rem] h-[1px] w-full bg-gray-600"></div>
      <p className="text-center">
        JR Contabilidade e Sistemas © Feito com ❤️ por Rubens de Oliveira
      </p>
    </footer>
  )
}
