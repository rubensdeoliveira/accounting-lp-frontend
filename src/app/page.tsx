import Header from '@/app/components/header/header.component'
import { Footer, HeroSection, WhyChooseUsSection } from '@/app/sections'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-[10rem]">
        <HeroSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </>
  )
}
