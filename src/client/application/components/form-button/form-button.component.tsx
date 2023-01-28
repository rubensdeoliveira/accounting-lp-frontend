import React from 'react'

import { FormButtonModel } from './models'

export function FormButton({ label, className, ...rest }: FormButtonModel) {
  return (
    <button
      {...rest}
      type="submit"
      className={`${className} w-full self-end rounded-lg bg-red900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red500 dark:hover:bg-red-700 dark:focus:ring-red-800`}
    >
      {label}
    </button>
  )
}
