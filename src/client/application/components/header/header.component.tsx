import { CallToAction } from './components'
import DarkModeSwitcher from './components/dark-mode-switcher/dark-mode-switcher.component'
import Logo from './components/logo/logo.component'
import Menu from './components/menu/menu.component'
import { HeaderModel } from './models'

export function Header({ logo, logoDark }: HeaderModel) {
  return (
    <header className="flex w-full items-center justify-between py-10 md:py-11 lg:py-12">
      <Logo logo={logo} logoDark={logoDark} />
      <Menu />
      <div className="hidden items-center gap-6 md:flex">
        <DarkModeSwitcher />
        <CallToAction link="/area-do-cliente" />
      </div>
    </header>
  )
}
