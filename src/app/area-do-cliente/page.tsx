import { Footer, Header } from '@/app/_presentation/components'
import { normalizeData } from '@/app/_presentation/helpers'
import { getSharedQuery } from '@/infra/graphql/shared/queries'
import { client } from '@/infra/graphql/common/client'

async function getOurServicesData() {
  try {
    const sharedResponse = await client.request(getSharedQuery)
    const { shared } = normalizeData(sharedResponse)
    return shared
  } catch {
    throw new Error('Failed to fetch data')
  }
}

export default async function ClientArea() {
  const shared = await getOurServicesData()

  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header {...shared.header} />
      <div className="flex flex-1 items-center justify-center py-16">
        <form className="w-full max-w-[480px]">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer {...shared.footer} />
    </div>
  )
}
