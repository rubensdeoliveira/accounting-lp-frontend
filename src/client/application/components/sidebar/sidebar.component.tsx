import { signOut, useSession } from 'next-auth/react'
import { SidebarModel } from './models'

export function SideBar({ children }: SidebarModel) {
  const { data } = useSession()

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
              <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
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
              <li className="dark:bg-gray-800 dark:text-gray-50">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 fill-current dark:text-gray-400"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
            <ul className="space-y-1 pt-4 pb-2 text-sm">
              <li>
                <a
                  rel="noopener noreferrer"
                  onClick={async () => await signOut()}
                  className="flex cursor-pointer items-center space-x-3 rounded-md p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 fill-current dark:text-gray-400"
                  >
                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                    <rect width="32" height="64" x="256" y="232"></rect>
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
