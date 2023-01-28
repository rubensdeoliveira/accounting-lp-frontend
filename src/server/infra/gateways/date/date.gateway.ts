import { addDays, addHours } from 'date-fns'
import { injectable } from 'tsyringe'

import {
  AddDaysDateGatewayContract,
  AddHoursDateGatewayContract,
  DateGatewayContract,
} from '@/server/domain/contracts'

@injectable()
export class DateGateway implements DateGatewayContract {
  async addDays(
    data: AddDaysDateGatewayContract.Input,
  ): Promise<AddDaysDateGatewayContract.Output> {
    const dateWithAddedDays = addDays(data.date, data.days)
    return dateWithAddedDays
  }

  async addHours(
    data: AddHoursDateGatewayContract.Input,
  ): Promise<AddHoursDateGatewayContract.Output> {
    const dateWithAddedHours = addHours(data.date, data.hours)
    return dateWithAddedHours
  }
}
