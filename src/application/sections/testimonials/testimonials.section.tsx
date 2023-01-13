import { SectionInfo } from '@/application/components'
import { TestimonialsSectionModel } from '@/infra/graphql/home/models'
import { Flex } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { TestimonialCard } from './components'

export function TestimonialsSection({
  sectionHeader,
  testimonialCards,
}: TestimonialsSectionModel) {
  const renderTestemonialCards = useMemo(
    () =>
      testimonialCards.map(testimonialCard => (
        <TestimonialCard key={testimonialCard.id} {...testimonialCard} />
      )),
    [testimonialCards],
  )

  return (
    <Flex
      alignItems="center"
      as="section"
      gap={['2.4rem', '2.4rem', '2.4rem', '4.8rem', '4.8rem', '4.8rem']}
      flexDirection="column"
    >
      <SectionInfo
        title={sectionHeader.title}
        description={sectionHeader.description}
      />
      <Flex
        flexWrap={'wrap'}
        gap={'2.05rem'}
        justifyContent="center"
        w={'100%'}
      >
        {renderTestemonialCards}
      </Flex>
    </Flex>
  )
}
