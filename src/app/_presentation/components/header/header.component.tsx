import { CallToAction, Logo } from './components'
import DarkModeSwitcher from './components/dark-mode-switcher/dark-mode-switcher.component'
import Menu from './components/menu/menu.component'
import { HeaderModel } from './models'

export function Header({ logo }: HeaderModel) {
  return (
    <header className="flex w-full items-center justify-between py-12">
      <Logo url={logo.url} className="order-1 md:order-1" />
      <Menu className="order-3 md:order-2" />
      <DarkModeSwitcher className="order-2 md:order-3" />
      <div className="hidden md:order-4 md:flex">
        <CallToAction link="/area-do-cliente" />
      </div>
    </header>
  )
}
