import { ButtonHTMLAttributes } from 'react'

export type FormButtonModel = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
}
