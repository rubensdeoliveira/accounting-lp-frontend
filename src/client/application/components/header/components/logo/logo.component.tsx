import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { LogoModel } from './models'

export function Logo({ logo, logoDark }: LogoModel) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <Link href={'/'}>
      {mounted && (
        <Image
          alt="Logo da JR Contabilidade"
          src={theme === 'light' ? logo.url : logoDark.url}
          width={86}
          height={36}
        />
      )}
    </Link>
  )
}
