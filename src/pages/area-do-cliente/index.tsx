import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

import { CreateSessionSchema, CreateSessionDTO } from '@/shared/schemas'
import { normalizeData, withSSRGuest } from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { Footer, Header } from '@/client/application/sections'
import { Button, Input, Toast } from '@rubensdeoliveira-ui/react'

export const getServerSideProps = withSSRGuest(async () => {
  const sharedResponse = await client.request(getSharedQuery)
  const { shared } = normalizeData(sharedResponse)
  return {
    props: { ...shared },
  }
})

export default function ClientArea({ footer, header }: SharedQueryModel) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSessionDTO>({
    resolver: zodResolver(CreateSessionSchema),
  })
  const searchParams = useSearchParams()
  const errorFromAuthentication = searchParams.get('error')
  const handleSubmitForm = useCallback(async (data: CreateSessionDTO) => {
    await signIn('email', { email: data.email })
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
          <Button label="Entrar" />
          <Button
            label="Logar com Google"
            onClick={async () => await signIn('google')}
            type="button"
          />
        </form>
      </div>
      {errorFromAuthentication && (
        <Toast
          type="danger"
          message="Você não está cadastrado na plataforma, solicite acesso ao administrador"
        />
      )}
      <Footer {...footer} />
    </div>
  )
}
