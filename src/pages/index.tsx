import { Header, Layout } from '@/application/components'
import { normalizeData } from '@/application/helpers'
import {
  CountInNumbersSection,
  ExperienceSection,
  HeroSection,
  TestimonialsSection,
  WhatWeDoSection,
  CallToActionSection,
  FooterSection,
} from '@/application/sections'
import { client } from '@/infra/graphql/common/client'
import { HomePageQueryModel } from '@/infra/graphql/home/models'
import { getHomePageQuery } from '@/infra/graphql/home/queries'
import { Flex } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

export default function Home({
  callToAction,
  contact,
  countInNumbers,
  experience,
  footer,
  hero,
  testimonials,
  whatWeDo,
}: HomePageQueryModel) {
  return (
    <>
      <Layout>
        <Header isHomePage />
        <Flex
          as="main"
          gap={['6rem', '6rem', '6rem', '12rem', '12rem', '12rem']}
          flexDir="column"
          pt={['1.4rem', '1.4rem', '1.4rem', '2.8rem', '2.8rem', '2.8rem']}
          pb={['6rem', '6rem', '6rem', '12rem', '12rem', '12rem']}
        >
          <HeroSection {...hero} />
          <WhatWeDoSection {...whatWeDo} />
          <ExperienceSection {...experience} />
          <CountInNumbersSection {...countInNumbers} />
          <TestimonialsSection {...testimonials} />
          <CallToActionSection {...callToAction} />
          {/* <ContactSection {...contact} /> */}
        </Flex>
      </Layout>
      <FooterSection {...footer} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.request(getHomePageQuery)
  const { home } = normalizeData(response)
  return {
    props: { ...home },
    revalidate: 60 * 10,
  }
}
