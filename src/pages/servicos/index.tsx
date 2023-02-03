import { Footer, Header, Main } from '@/client/application/components'
import { WhyChooseUsSection } from '@/client/application/sections'
import { normalizeData, withSSRGuest } from '@/client/application/helpers'
import { getOurServicesPageQuery } from '@/client/infra/graphql/our-services/queries'
import { OurServicesQueryModel } from '@/client/infra/graphql/our-services/models'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { client } from '@/client/infra/graphql/common/client'

export const getServerSideProps = withSSRGuest(async () => {
  const [ourServiceResponse, sharedResponse] = await Promise.all([
    client.request(getOurServicesPageQuery),
    client.request(getSharedQuery),
  ])
  const { ourService } = normalizeData(ourServiceResponse)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...ourService, ...shared },
  }
})

export default function OurServices({
  footer,
  header,
  whyChooseUs,
}: OurServicesQueryModel & SharedQueryModel) {
  return (
    <>
      <Header {...header} />
      <Main>
        <WhyChooseUsSection {...whyChooseUs} />
      </Main>
      <Footer {...footer} />
    </>
  )
}
