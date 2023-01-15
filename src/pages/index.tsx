import { Header, Layout } from '@/application/components'
import { Footer, HeroSection, WhyChooseUsSection } from '@/application/sections'

export default function Home() {
  return (
    <Layout>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </Layout>
  )
}
