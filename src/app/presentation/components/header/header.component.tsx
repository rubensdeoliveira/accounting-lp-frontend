import { CallToAction, Logo } from './components'
import Menu from './components/menu/menu.component'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between py-12">
      <Logo />
      <Menu />
      <div className="hidden md:flex">
        <CallToAction />
      </div>
    </header>
  )
}
