import { DrawerModel } from './models'

export function Drawer({ children, isOpen, onSetIsOpen }: DrawerModel) {
  return (
    <main
      className={
        ' fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out ' +
        (isOpen
          ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
          : ' translate-x-full opacity-0 transition-all delay-500  ')
      }
    >
      <section
        className={
          ' delay-400 absolute right-0 h-full w-screen max-w-xs transform bg-gray900 shadow-xl transition-all duration-500 ease-in-out dark:bg-gray500  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        {children}
      </section>
      <section
        className=" h-full w-screen cursor-pointer "
        onClick={onSetIsOpen}
      ></section>
    </main>
  )
}
