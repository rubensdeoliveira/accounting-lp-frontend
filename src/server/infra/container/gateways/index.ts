import { container } from 'tsyringe'

import {
  DateGatewayContract,
  HashGatewayContract,
  JwtGatewayContract,
} from '@/server/domain/contracts'
import { DateGateway, HashGateway, JwtGateway } from '@/server/infra/gateways'

container.registerSingleton<HashGatewayContract>(
  HashGatewayContract,
  HashGateway,
)

container.registerSingleton<JwtGatewayContract>(JwtGatewayContract, JwtGateway)

container.registerSingleton<DateGatewayContract>(
  DateGatewayContract,
  DateGateway,
)
