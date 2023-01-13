import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'

import { ContactSectionModel } from '@/infra/graphql/home/models'
import { ContactCard } from './components'

export function ContactSection({ contactCards }: ContactSectionModel) {
  const renderContactCards = useMemo(
    () =>
      contactCards.map(contactCard => (
        <ContactCard key={contactCard.id} {...contactCard} />
      )),
    [contactCards],
  )

  return (
    <Flex
      flexWrap={'wrap'}
      gap={'2.05rem'}
      as="section"
      justifyContent={'center'}
    >
      {renderContactCards}
    </Flex>
  )
}
