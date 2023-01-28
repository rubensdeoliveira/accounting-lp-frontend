import { Footer, Header, Input } from '@/client/application/components'
import { normalizeData } from '@/client/application/helpers'
import { getSharedQuery } from '@/client/infra/graphql/shared/queries'
import { client } from '@/client/infra/graphql/common/client'
import { GetStaticProps } from 'next'
import { SharedQueryModel } from '@/client/infra/graphql/shared/models'
import { FormButton } from '@/client/application/components/form-button'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  CreateSessionInput,
  SessionsRouter,
} from '@/server/application/routers'
import { inferRouterInputs } from '@trpc/server'

type SessionsRouterInput = inferRouterInputs<SessionsRouter>['create']

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
  } = useForm<SessionsRouterInput>({
    resolver: zodResolver(CreateSessionInput),
  })

  const handleSubmitForm = useCallback((data: SessionsRouterInput) => {
    console.log(data)
  }, [])

  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header {...header} />
      <div className="flex flex-1 items-center justify-center py-16">
        <form
          className="flex w-full max-w-[480px] flex-col"
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
      <Footer {...footer} />
    </div>
  )
}
