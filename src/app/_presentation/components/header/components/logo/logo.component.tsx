import Image from 'next/image'
import Link from 'next/link'
import { LogoModel } from './models'

export function Logo({ url, className }: LogoModel) {
  return (
    <Link href={'/'} className={className}>
      <Image alt="Logo da JR Contabilidade" src={url} width={131} height={54} />
    </Link>
  )
}
