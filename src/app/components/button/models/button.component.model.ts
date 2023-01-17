import { ButtonHTMLAttributes } from 'react'

export type ButtonModel = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  link: string
}
