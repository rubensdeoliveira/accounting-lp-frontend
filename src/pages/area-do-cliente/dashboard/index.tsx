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

export default function ClientAreaDashboard({
  footer,
  header,
}: SharedQueryModel) {
  return (
    <>
      <Header {...header} />
      <Footer {...footer} />
    </>
  )
}
