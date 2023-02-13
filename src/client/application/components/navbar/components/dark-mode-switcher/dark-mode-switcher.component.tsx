import { useCallback } from 'react'
import { useTheme } from 'next-themes'

import { Button, Icon } from '@rubensdeoliveira-ui/react'

export function DarkModeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }, [theme])

  return (
    <Button onClick={toggleTheme} type="button" variant="ghost">
      <Icon name="SunIcon" className="hidden dark:block" size={20} />
      <Icon name="MoonIcon" className="block dark:hidden" size={20} />
    </Button>
  )
}
