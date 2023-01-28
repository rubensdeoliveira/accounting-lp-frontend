import { useEffect } from 'react'

import { api } from '@/shared/utils'

export default function IndexPage() {
  const mutation = api.session.create.useMutation({})

  useEffect(() => {
    const result = mutation.mutate({
      email: 'rubensojunior6@gmail.com',
      password: '123456',
    })
    console.log(result)
  }, [])

  return (
    <div>
      <p>fsdfd</p>
    </div>
  )
}
