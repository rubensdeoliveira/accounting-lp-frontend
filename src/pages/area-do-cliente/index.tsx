import { Footer, Header } from '@/client/application/components'
import { normalizeData } from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { GetStaticProps } from 'next'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'

export const getStaticProps: GetStaticProps = async () => {
  const sharedResponse = await client.request(getSharedQuery)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...shared },
    revalidate: 60 * 10,
  }
}

export default function ClientArea({ footer, header }: SharedQueryModel) {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header {...header} />
      <div className="flex flex-1 items-center justify-center py-16">
        <form className="flex w-full max-w-[480px] flex-col">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red900 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red500 dark:focus:ring-red-500"
              placeholder="Digite um e-mail válido"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red900 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-red500 dark:focus:ring-red-500"
              required
              placeholder="Digite sua senha"
            />
          </div>
          <button
            type="submit"
            className="w-full self-end rounded-lg bg-red900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red500 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Entrar
          </button>
        </form>
      </div>
      <Footer {...footer} />
    </div>
  )
}
