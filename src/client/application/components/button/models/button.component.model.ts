import { ButtonHTMLAttributes } from 'react'

export type ButtonModel = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  link?: string
  buttonType?: 'learnMore' | 'link' | 'dashboard'
  iconLeft?: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
  iconRight?: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  >
}
