import { FormHTMLAttributes, ReactNode } from 'react'

export type FormModel = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}
