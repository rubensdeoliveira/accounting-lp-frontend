import { api } from '@/utils/api'
import { useEffect } from 'react'

export default function IndexPage() {
  const mutation = api.session.create.useMutation({})

  useEffect(() => {
    const result = mutation.mutate({
      email: 'rubensojunior@gmail.com',
      password: 'te',
    })
    console.log(result)
  }, [])

  return (
    <div>
      <p>fsdfd</p>
    </div>
  )
}
