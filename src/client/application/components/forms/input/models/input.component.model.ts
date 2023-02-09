import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

export type InputModel = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  register: UseFormRegister<any>
  errors?: any
}
