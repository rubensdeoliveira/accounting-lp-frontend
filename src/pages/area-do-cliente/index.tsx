import { Footer, Header, Input, Toast } from '@/client/application/components'
import { normalizeData } from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { GetStaticProps } from 'next'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { FormButton } from '@/client/application/components/form-button'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateSessionSchema, CreateSessionDTO } from '@/shared/schemas'
import { api } from '@/shared/utils'
import { useRouter } from 'next/navigation'

export const getStaticProps: GetStaticProps = async () => {
  const sharedResponse = await client.request(getSharedQuery)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...shared },
    revalidate: 60 * 10,
  }
}

export default function ClientArea({ footer, header }: SharedQueryModel) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSessionDTO>({
    resolver: zodResolver(CreateSessionSchema),
  })
  const { push } = useRouter()
  const { mutate, error } = api.session.create.useMutation({
    onSuccess: () => {
      push('/area-do-cliente/dashboard')
    },
  })
  const handleSubmitForm = useCallback((data: CreateSessionDTO) => {
    mutate(data)
  }, [])

  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header {...header} />
      <div className="flex flex-1 items-center justify-center py-16">
        <form
          className="flex w-full max-w-[340px] flex-col"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <Input
            label="E-mail"
            name="email"
            placeholder="Digite um e-mail válido"
            type="email"
            className="mb-3"
            register={register}
            errors={errors}
          />
          <Input
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type="password"
            className="mb-6"
            register={register}
            errors={errors}
          />
          <FormButton label="Entrar" />
        </form>
      </div>
      {error && <Toast type="danger" message={error.message} />}
      <Footer {...footer} />
    </div>
  )
}
