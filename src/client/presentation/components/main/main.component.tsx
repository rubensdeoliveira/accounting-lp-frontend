import { MainModel } from './models'

export function Main({ children }: MainModel) {
  return (
    <main className="mb-20 flex flex-col gap-[5rem] md:mb-[7.5rem] md:gap-[7.5rem] lg:mb-40 lg:gap-[10rem]">
      {children}
    </main>
  )
}
