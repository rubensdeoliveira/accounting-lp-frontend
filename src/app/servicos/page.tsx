import { Footer, Header, Main } from '@/app/_presentation/components'
import { WhyChooseUsSection } from '@/app/_presentation/sections'
import { normalizeData } from '@/app/_presentation/helpers'
import { getOurServicesPageQuery } from '@/infra/graphql/our-services/queries'
import { OurServicesQueryModel } from '@/infra/graphql/our-services/models'
import { getSharedQuery } from '@/infra/graphql/shared/queries'
import { SharedQueryModel } from '@/infra/graphql/shared/models'
import { client } from '@/infra/graphql/common/client'

type GetOurServiceDataResult = {
  ourService: OurServicesQueryModel
  shared: SharedQueryModel
}

async function getOurServicesData(): Promise<GetOurServiceDataResult> {
  try {
    const [ourServiceResponse, sharedResponse] = await Promise.all([
      client.request(getOurServicesPageQuery),
      client.request(getSharedQuery),
    ])
    const { ourService } = normalizeData(ourServiceResponse)
    const { shared } = normalizeData(sharedResponse)
    return { ourService, shared }
  } catch {
    throw new Error('Failed to fetch data')
  }
}
export default async function OurServices() {
  const { ourService, shared } = await getOurServicesData()

  return (
    <>
      <Header {...shared.header} />
      <Main>
        <WhyChooseUsSection {...ourService.whyChooseUs} />
      </Main>
      <Footer {...shared.footer} />
    </>
  )
}
