import { decode, sign, verify } from 'jsonwebtoken'
import { injectable } from 'tsyringe'

import {
  DecodeJwtGatewayContract,
  JwtGatewayContract,
  SignJwtGatewayContract,
  VerifyJwtGatewayContract,
} from '@/server/domain/contracts'
import { JwtPayloadModel } from '@/server/domain/models'

@injectable()
export class JwtGateway implements JwtGatewayContract {
  decode(
    token: DecodeJwtGatewayContract.Input,
  ): DecodeJwtGatewayContract.Output {
    const payload = decode(token) as JwtPayloadModel
    return payload
  }

  sign(data: SignJwtGatewayContract.Input): SignJwtGatewayContract.Output {
    const token = sign(data.payload, data.secret, {
      expiresIn: data.expires_in,
    })
    return token
  }

  verify(
    data: VerifyJwtGatewayContract.Input,
  ): VerifyJwtGatewayContract.Output {
    const payload = verify(data.token, data.secret) as JwtPayloadModel
    return payload
  }
}
