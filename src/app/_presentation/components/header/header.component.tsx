import { CallToAction, Logo } from './components'
import DarkModeSwitcher from './components/dark-mode-switcher/dark-mode-switcher.component'
import Menu from './components/menu/menu.component'
import { HeaderModel } from './models'

export function Header({ logo }: HeaderModel) {
  return (
    <header className="flex w-full items-center justify-between py-12">
      <Logo url={logo.url} />
      <Menu />
      <div className="hidden items-center gap-6 md:flex">
        <DarkModeSwitcher />
        <CallToAction link="/area-do-cliente" />
      </div>
    </header>
  )
}
