import { signOut, useSession } from 'next-auth/react'
import { useCallback, useMemo } from 'react'
import { sidebarMainItems, sidebarSecondaryItems } from './constants'
import { SidebarModel } from './models'
import { HomeIcon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function SideBar({ children }: SidebarModel) {
  const { data } = useSession()

  const renderName = useMemo(() => {
    const splittedName = data?.user?.name?.split(' ')
    if (splittedName && splittedName.length > 2) {
      return `${splittedName[0]} ${splittedName[1]}`
    }
    return data?.user?.name
  }, [data?.user?.name])

  const pathname = usePathname()

  const renderSidebarItem = useCallback(
    (
      label: string,
      Icon: React.ForwardRefExoticComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined
          titleId?: string | undefined
        }
      >,
      path: string,
    ) => (
      <li
        className={`${
          pathname?.includes(path) ? 'dark:bg-gray-800 dark:text-gray-50' : ''
        } `}
        key={label}
      >
        <Link
          href={path}
          className="flex items-center space-x-3 rounded-md p-2"
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </Link>
      </li>
    ),
    [pathname],
  )

  return (
    <div className="drawer-mobile drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="h-full w-60 space-y-2 p-3 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex items-center space-x-4 p-2">
            {data?.user?.image ? (
              <img
                src={data?.user?.image}
                alt={data?.user?.name ?? 'Foto do usuaário'}
                className="h-12 w-12 rounded-full dark:bg-gray-500"
              />
            ) : (
              <div className="placeholder avatar">
                <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                  <span>
                    {data?.user?.name ? data?.user?.name.charAt(0) : 'A'}
                  </span>
                </div>
              </div>
            )}
            <div>
              <h2 className="text-lg font-semibold">{renderName}</h2>
              <span className="flex items-center space-x-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  View profile
                </a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-700">
            <ul className="space-y-1 pt-2 pb-4 text-sm">
              {sidebarMainItems.map(({ Icon, label, path }) =>
                renderSidebarItem(label, Icon, path),
              )}
            </ul>
            <ul className="space-y-1 pt-4 pb-2 text-sm">
              {sidebarSecondaryItems.map(({ Icon, label, path }) =>
                renderSidebarItem(label, Icon, path),
              )}
              <li>
                <button
                  className="flex w-full items-center space-x-3 rounded-md p-2"
                  onClick={async () => await signOut()}
                >
                  <HomeIcon className="h-5 w-5" />
                  <span>Sair</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
