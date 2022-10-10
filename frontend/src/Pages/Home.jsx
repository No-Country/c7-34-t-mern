import { BannerCB, Navbar, Tutorial } from "../Components"
import BenefitsSection from "@/Components/Home/Benefits/BenefitsSection"

function Home() {
  return (
    <>
      <Navbar />
      <BannerCB />
      <BenefitsSection />
      <Tutorial />
    </>
  )
}

export default Home
