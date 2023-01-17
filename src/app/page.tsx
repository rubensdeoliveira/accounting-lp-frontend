import Header from '@/app/presentation/components/header/header.component'
import {
  Footer,
  HeroSection,
  WhyChooseUsSection,
} from '@/app/presentation/sections'

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
