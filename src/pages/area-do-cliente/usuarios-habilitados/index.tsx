import { DashboardContainer } from '@/client/application/components'
import {
  normalizeData,
  withSSRAuthenticated,
} from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'

export const getServerSideProps = withSSRAuthenticated(async () => {
  const sharedResponse = await client.request(getSharedQuery)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...shared },
  }
})

export default function ClientAreaAllowedUsers({
  footer,
  header,
}: SharedQueryModel) {
  return (
    <DashboardContainer header={header} footer={footer}>
      teste
    </DashboardContainer>
  )
}
