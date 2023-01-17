import Header from '@/app/presentation/components/header/header.component'
import { client } from '@/infra/graphql/common/client'
import { getHomePageQuery } from '@/infra/graphql/home/queries'
import { normalizeData } from '@/app/presentation/helpers'
import { HeroSection, WhyChooseUsSection } from '@/app/presentation/sections'
import { HomeQueryModel } from '@/infra/graphql/home/models'
import { Footer } from '@/app/presentation/components'

async function getHomeData(): Promise<HomeQueryModel> {
  try {
    const response = await client.request(getHomePageQuery)
    const { home } = normalizeData(response)
    return home
  } catch {
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const data = await getHomeData()

  return (
    <>
      <Header />
      <main className="flex flex-col gap-[10rem]">
        <HeroSection {...data.hero} />
        <WhyChooseUsSection {...data.whyChooseUs} />
      </main>
      <Footer {...data.footer} />
    </>
  )
}
