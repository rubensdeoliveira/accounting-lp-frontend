import { api } from '@/utils/api'

export default function IndexPage() {
  const { isLoading, error, data } = api.user.getAll.useQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Erro</div>
  }
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
