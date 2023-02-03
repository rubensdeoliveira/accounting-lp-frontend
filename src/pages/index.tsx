import { client } from '@/client/infra/graphql/common/client'
import { getHomePageQuery } from '@/client/infra/graphql/home/queries'
import { normalizeData, withSSRGuest } from '@/client/application/helpers'
import { HeroSection, WhyChooseUsSection } from '@/client/application/sections'
import { Footer, Header, Main } from '@/client/application/components'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { HomeQueryModel } from '@/client/infra/graphql/home/models'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'

export const getServerSideProps = withSSRGuest(async () => {
  const [homeResponse, sharedResponse] = await Promise.all([
    client.request(getHomePageQuery),
    client.request(getSharedQuery),
  ])
  const { home } = normalizeData(homeResponse)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...home, ...shared },
  }
})

export default function Home({
  hero,
  whyChooseUs,
  footer,
  header,
}: HomeQueryModel & SharedQueryModel) {
  return (
    <>
      <Header {...header} />
      <Main>
        <HeroSection {...hero} />
        <WhyChooseUsSection {...whyChooseUs} />
      </Main>
      <Footer {...footer} />
    </>
  )
}
