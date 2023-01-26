import { Button } from '@/app/_presentation/components'
import { CallToActionModel } from './models'

export function CallToAction({ link }: CallToActionModel) {
  return <Button link={link} label="Área do Cliente" />
}
