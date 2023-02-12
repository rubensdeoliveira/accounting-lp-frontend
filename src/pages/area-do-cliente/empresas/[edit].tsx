import { DashboardContainer } from '@/client/application/components'
import {
  normalizeData,
  withSSRAuthenticated,
} from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateCompanyDTO, CreateCompanySchema } from '@/shared/schemas'
import { api } from '@/shared/utils'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Form, FormRow, Input } from '@rubensdeoliveira-ui/react'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyDTO>({
    resolver: zodResolver(CreateCompanySchema),
  })
  const router = useRouter()

  const { mutate, isLoading, isError } = api.company.create.useMutation({
    onSuccess: () => {
      router.push('/area-do-cliente/empresas')
    },
    onError: err => {
      console.log(err)
    },
  })

  const handleSubmitForm = useCallback((data: CreateCompanyDTO) => {
    console.log(data)
    mutate(data)
  }, [])

  return (
    <DashboardContainer header={header} footer={footer}>
      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <Input
          name="name"
          label="Nome da empresa"
          register={register}
          errors={errors}
        />
        <FormRow>
          <Input name="cnpj" label="CNPJ" register={register} errors={errors} />
          <Input
            name="ie"
            label="Inscrição Estadual"
            register={register}
            errors={errors}
          />
        </FormRow>
        <Button label="Cadastrar" type="submit" />
      </Form>
    </DashboardContainer>
  )
}
