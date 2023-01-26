'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { setCookie, parseCookies } from 'nookies'

type DarkModeSwitcherModel = {
  className?: string
}

export default function DarkModeSwitcher({ className }: DarkModeSwitcherModel) {
  const { 'color-theme': colorTheme } = parseCookies()

  return (
    <div id={`theme-toggle`} className={className}>
      {colorTheme === 'light' ? (
        <FiSun
          id={`theme-toggle-dark-icon`}
          className=" h-[30px] w-[30px]"
          onClick={() => {
            setCookie(null, 'color-theme', 'dark', {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            })
          }}
        />
      ) : (
        <FiMoon
          id={`theme-toggle-light-icon`}
          className=" h-[30px] w-[30px]"
          onClick={() => {
            setCookie(null, 'color-theme', 'light', {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            })
          }}
        />
      )}
    </div>
  )
}
