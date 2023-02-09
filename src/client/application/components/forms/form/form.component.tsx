import React from 'react'

import { FormModel } from './models'

export function Form({ children, ...rest }: FormModel) {
  return <form {...rest}>{children}</form>
}
