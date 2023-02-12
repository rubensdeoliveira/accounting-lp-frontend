import { DashboardContainer } from '@/client/application/components'
import {
  normalizeData,
  withSSRAuthenticated,
} from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { api } from '@/shared/utils'
import { useAtom } from 'jotai'
import { pageAtom } from '@/client/application/atoms'
import { Table } from '@rubensdeoliveira-ui/react'

export const getServerSideProps = withSSRAuthenticated(async () => {
  const sharedResponse = await client.request(getSharedQuery)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...shared },
  }
})

export default function ClientAreaCompanies({
  footer,
  header,
}: SharedQueryModel) {
  const [page, setPage] = useAtom(pageAtom)

  const { data, isError, isLoading } = api.company.list.useQuery({
    search: '',
    page,
  })

  return (
    <DashboardContainer header={header} footer={footer}>
      <Table
        page={page}
        setPage={setPage}
        header={[
          {
            columnLabel: 'Nome da Empresa',
            columnName: 'name',
            columnType: 'default',
          },
          {
            columnLabel: 'CNPJ',
            columnName: 'cnpj',
            columnType: 'default',
          },
        ]}
        data={data}
      />
    </DashboardContainer>
  )
}
