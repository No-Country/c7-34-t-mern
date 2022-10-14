import { BannerCB, Navbar, Tutorial } from "../Components"
import BenefitsSection from "@/Components/Home/Benefits/BenefitsSection"
import Consult from "@/Components/Home/Consult/ConsultSection"
import Footer from "@/Components/Home/Footer/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <BannerCB />
      <BenefitsSection />
      <Tutorial />
      <Consult />
      <Footer />
    </>
  )
}

export default Home
