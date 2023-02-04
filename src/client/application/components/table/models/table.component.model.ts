import { ListEntitiesModel } from '@/server/domain/models/common'
import { SetStateAction } from 'jotai'

type TableHeader = {
  columnName: string
  columnLabel: string
  columnType?: 'default' | 'subtitled' | 'tagged'
}

export type TableModel = {
  header: TableHeader[]
  data: ListEntitiesModel<any> | undefined
  page: number
  setPage: (update: SetStateAction<number>) => void
}
