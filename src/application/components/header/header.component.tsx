import { CallToAction, Logo, Menu } from './components'

export function Header() {
  return (
    <header className="flex justify-between w-full py-12 items-center">
      <Logo />
      <Menu />
      <div className="hidden md:flex">
        <CallToAction />
      </div>
    </header>
  )
}
