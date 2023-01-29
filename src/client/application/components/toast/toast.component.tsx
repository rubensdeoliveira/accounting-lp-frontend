import React, { useMemo } from 'react'
import { Toast as FlowbiteToast } from 'flowbite-react'

import { ToastModel } from './models'
import { XCircleIcon } from '@heroicons/react/24/solid'

export function Toast({ type, message }: ToastModel) {
  return (
    <FlowbiteToast className="absolute top-5 right-5">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <XCircleIcon className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <FlowbiteToast.Toggle />
    </FlowbiteToast>
  )
}
