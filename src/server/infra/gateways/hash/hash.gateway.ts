import * as bcrypt from 'bcrypt'
import { injectable } from 'tsyringe'

import {
  CompareHashGatewayContract,
  GenerateHashGatewayContract,
  HashGatewayContract,
} from '@/server/domain/contracts'

@injectable()
export class HashGateway implements HashGatewayContract {
  async compare(
    data: CompareHashGatewayContract.Input,
  ): Promise<CompareHashGatewayContract.Output> {
    const isEqual = await bcrypt.compare(data.value, data.hashedValue)
    return isEqual
  }

  async generate(
    value: GenerateHashGatewayContract.Input,
  ): Promise<GenerateHashGatewayContract.Output> {
    const salt = await bcrypt.genSalt()
    const hashedValue = await bcrypt.hash(value, salt)
    return hashedValue
  }
}
