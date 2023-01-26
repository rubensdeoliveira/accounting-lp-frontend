import { MainModel } from './models'

export function Main({ children }: MainModel) {
  return <main className="mb-40 flex flex-col gap-[10rem]">{children}</main>
}
