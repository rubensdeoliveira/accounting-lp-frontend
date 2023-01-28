import React from 'react'

import { InputModel } from './models'

export function Input({
  label,
  className,
  name,
  type,
  placeholder,
  register,
  errors,
  ...rest
}: InputModel) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...rest}
        {...register(name)}
        name={name}
        type={type}
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red900 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red500 dark:focus:ring-red-500"
        placeholder={placeholder}
      />
      {errors?.[name]?.message && <>{errors[name].message}</>}
    </div>
  )
}
