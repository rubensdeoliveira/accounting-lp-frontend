import { IconType } from 'react-icons'
import { FiPhone } from 'react-icons/fi'

const whatWeDoIcons = {
  phone: FiPhone,
}

export function getWhatWeDoIcon(iconType: string): IconType {
  return whatWeDoIcons[iconType] || FiPhone
}
