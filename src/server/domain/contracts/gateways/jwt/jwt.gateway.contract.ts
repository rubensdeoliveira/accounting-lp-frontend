import { JwtPayloadModel } from '@/server/domain/models'

export const JwtGatewayContract = 'JwtGatewayContract'

export interface JwtGatewayContract {
  decode: (
    input: DecodeJwtGatewayContract.Input,
  ) => DecodeJwtGatewayContract.Output
  sign: (input: SignJwtGatewayContract.Input) => SignJwtGatewayContract.Output
  verify: (
    input: VerifyJwtGatewayContract.Input,
  ) => VerifyJwtGatewayContract.Output
}

export namespace DecodeJwtGatewayContract {
  export type Input = string
  export type Output = JwtPayloadModel
}

export namespace SignJwtGatewayContract {
  export type Input = {
    payload: JwtPayloadModel
    secret: string
    expires_in: string
  }
  export type Output = string
}

export namespace VerifyJwtGatewayContract {
  export type Input = { token: string; secret: string }
  export type Output = JwtPayloadModel
}
