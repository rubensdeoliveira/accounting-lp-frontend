import { IconType } from 'react-icons'
import { FiPhone } from 'react-icons/fi'

const footerIcons = {
  phone: FiPhone,
}

export function getFooterIcon(iconType: string): IconType {
  return footerIcons[iconType] || FiPhone
}
