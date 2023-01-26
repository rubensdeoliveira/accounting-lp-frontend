import { client } from '@/infra/graphql/common/client'
import { getHomePageQuery } from '@/infra/graphql/home/queries'
import { normalizeData } from '@/app/_presentation/helpers'
import { HeroSection, WhyChooseUsSection } from '@/app/_presentation/sections'
import { Footer, Header, Main } from '@/app/_presentation/components'
import { getSharedQuery } from '@/infra/graphql/shared/queries'
import { HomeQueryModel } from '@/infra/graphql/home/models'
import { SharedQueryModel } from '@/infra/graphql/shared/models'

type GetHomeDataResult = {
  home: HomeQueryModel
  shared: SharedQueryModel
}

async function getHomeData(): Promise<GetHomeDataResult> {
  try {
    const [homeResponse, sharedResponse] = await Promise.all([
      client.request(getHomePageQuery),
      client.request(getSharedQuery),
    ])
    const { home } = normalizeData(homeResponse)
    const { shared } = normalizeData(sharedResponse)
    return { home, shared }
  } catch {
    throw new Error('Failed to fetch data')
  }
}

export default async function Home() {
  const { home, shared } = await getHomeData()

  return (
    <>
      <Header {...shared.header} />
      <Main>
        <HeroSection {...home.hero} />
        <WhyChooseUsSection {...home.whyChooseUs} />
      </Main>
      <Footer {...shared.footer} />
    </>
  )
}
