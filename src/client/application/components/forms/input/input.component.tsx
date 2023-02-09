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
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...rest}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="input-bordered input w-full max-w-xs"
      />
      {errors?.[name]?.message && (
        <label className="label">
          <span className="label-text-alt">{errors[name].message}</span>
        </label>
      )}
    </div>
  )
}
