import { client } from '@/client/infra/graphql/common/client'
import { getHomePageQuery } from '@/client/infra/graphql/home/queries'
import { normalizeData } from '@/client/presentation/helpers'
import { HeroSection, WhyChooseUsSection } from '@/client/presentation/sections'
import { Footer, Header, Main } from '@/client/presentation/components'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { HomeQueryModel } from '@/client/infra/graphql/home/models'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const [homeResponse, sharedResponse] = await Promise.all([
    client.request(getHomePageQuery),
    client.request(getSharedQuery),
  ])
  const { home } = normalizeData(homeResponse)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...home, ...shared },
    revalidate: 60 * 10,
  }
}

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
