import { IconType } from 'react-icons'
import { FiPhone } from 'react-icons/fi'

const contactIcons = {
  phone: FiPhone,
}

export function getContactIcon(iconType: string): IconType {
  return contactIcons[iconType] || FiPhone
}
