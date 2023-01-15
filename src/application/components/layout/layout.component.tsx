import React from 'react'

import { LayoutModel } from './models'

export function Layout({ children }: LayoutModel) {
  return (
    <div className="flex w-full max-w-screen-max-size mx-auto flex-col px-6 md:px-8 xl:px-0">
      {children}
    </div>
  )
}
