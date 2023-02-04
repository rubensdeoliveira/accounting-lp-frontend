import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const companyNames = Array.from({ length: 999 }, (_, i) => i + 1)
    .map(element => element)
    .map(() => ({
      name: faker.company.name(),
    }))
  for (const companyName of companyNames) {
    await prisma.company.upsert({
      where: { name: companyName.name },
      update: {},
      create: {
        name: companyName.name,
      },
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
