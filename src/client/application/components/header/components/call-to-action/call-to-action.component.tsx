import { Button } from '@/client/application/components'
import { CallToActionModel } from './models'

export function CallToAction({ link }: CallToActionModel) {
  return <Button link={link} label="Área do Cliente" />
}
