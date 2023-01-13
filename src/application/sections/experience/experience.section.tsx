import React, { useMemo } from 'react'
import { Flex, Grid } from '@chakra-ui/react'

import { ExperienceBar, ExperienceCard } from './components'
import { ExperienceSectionModel } from '@/infra/graphql/home/models'
import { SectionInfo } from '@/application/components'

export function ExperienceSection({
  sectionHeader,
  experienceBars,
  experienceCards,
}: ExperienceSectionModel) {
  const renderExperienceCards = useMemo(
    () =>
      experienceCards.map(experienceCard => (
        <ExperienceCard key={experienceCard.id} {...experienceCard} />
      )),
    [experienceCards],
  )

  const renderExperienceBars = useMemo(
    () =>
      experienceBars.map(experienceBar => (
        <ExperienceBar key={experienceBar.id} {...experienceBar} />
      )),
    [experienceBars],
  )

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
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
        gap={['1.6rem', '1.6rem', '1.6rem', '2.05rem', '2.05rem', '2.05rem']}
        justifyContent="center"
        w={'100%'}
      >
        {renderExperienceCards}
      </Flex>
      <Grid
        gridTemplateColumns={[
          '1fr',
          '1fr',
          '1fr',
          '1fr 1fr',
          '1fr 1fr',
          '1fr 1fr',
        ]}
        w={'100%'}
        columnGap={'1.8rem'}
        rowGap={['1.8rem', '1.8rem', '1.8rem', '3.1rem', '3.1rem', '3.1rem']}
        maxWidth={['373px', '373px', '373px', '1160px', '1160px', '1160px']}
      >
        {renderExperienceBars}
      </Grid>
    </Flex>
  )
}
