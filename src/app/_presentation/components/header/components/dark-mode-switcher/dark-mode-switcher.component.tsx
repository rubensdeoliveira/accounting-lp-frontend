'use client'

import { useAtom } from 'jotai'
import { setCookie } from 'nookies'
import { useCallback } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { themeAtom } from '@/app/_presentation/atoms'
import { DarkModeSwitcherModel } from './models'

export default function DarkModeSwitcher({ className }: DarkModeSwitcherModel) {
  const [theme, setTheme] = useAtom(themeAtom)

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    setCookie(null, 'color-theme', newTheme, {
      path: '/',
    })
  }, [theme])

  return (
    <div className={className} onClick={toggleTheme}>
      {theme === 'light' ? (
        <FiMoon className="h-[30px] w-[30px]" />
      ) : (
        <FiSun className="h-[30px] w-[30px]" />
      )}
    </div>
  )
}
