import { ButtonHTMLAttributes } from 'react'

export type LearnMoreButtonModel = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  link: string
}
