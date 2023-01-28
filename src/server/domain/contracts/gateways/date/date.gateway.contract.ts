export const DateGatewayContract = 'DateGatewayContract'

export interface DateGatewayContract {
  addDays: (
    input: AddDaysDateGatewayContract.Input,
  ) => Promise<AddDaysDateGatewayContract.Output>
  addHours: (
    input: AddHoursDateGatewayContract.Input,
  ) => Promise<AddHoursDateGatewayContract.Output>
}

export namespace AddDaysDateGatewayContract {
  export type Input = { date: Date; days: number }
  export type Output = Date
}

export namespace AddHoursDateGatewayContract {
  export type Input = { date: Date; hours: number }
  export type Output = Date
}
