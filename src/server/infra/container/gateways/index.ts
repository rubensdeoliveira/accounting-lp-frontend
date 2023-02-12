import { container } from 'tsyringe'

import {
  DateGatewayContract,
  HashGatewayContract,
} from '@/server/domain/contracts'
import { DateGateway, HashGateway } from '@/server/infra/gateways'

container.registerSingleton<HashGatewayContract>(
  HashGatewayContract,
  HashGateway,
)

container.registerSingleton<DateGatewayContract>(
  DateGatewayContract,
  DateGateway,
)
