export const HashGatewayContract = 'HashGatewayContract'

export interface HashGatewayContract {
  compare: (
    input: CompareHashGatewayContract.Input,
  ) => Promise<CompareHashGatewayContract.Output>
  generate: (
    input: GenerateHashGatewayContract.Input,
  ) => Promise<GenerateHashGatewayContract.Output>
}

export namespace CompareHashGatewayContract {
  export type Input = { hashedValue: string; value: string }
  export type Output = boolean
}

export namespace GenerateHashGatewayContract {
  export type Input = string
  export type Output = string
}
