import { AuthenticatedMenuModel } from './models'

export function AuthenticatedMenu({
  logo,
  logoDark,
  children,
}: AuthenticatedMenuModel) {
  return <div>{children}</div>
}
