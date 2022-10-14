import { BannerCB, Navbar, Tutorial } from "../Components"
import BenefitsSection from "@/Components/Home/Benefits/BenefitsSection"
import Consult from "@/Components/Home/Consult/ConsultSection"

function Home() {
  return (
    <>
      <Navbar />
      <BannerCB />
      <BenefitsSection />
      <Tutorial />
      <Consult />
    </>
  )
}

export default Home
