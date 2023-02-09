import { DarkModeSwitcher } from '../dark-mode-switcher'
import { Logo } from '../logo'
import { AuthenticatedMenuModel } from './models'
import { HomeIcon } from '@heroicons/react/24/solid'

export function AuthenticatedMenu({ logo, logoDark }: AuthenticatedMenuModel) {
  return (
    <div className="navbar justify-between bg-base-100">
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn-ghost drawer-button btn lg:hidden"
        >
          <HomeIcon className="h-6 w-6" />
        </label>
      </div>
      <Logo logo={logo} logoDark={logoDark} />
      <div className="flex-none">
        <DarkModeSwitcher />
      </div>
    </div>
  )
}
