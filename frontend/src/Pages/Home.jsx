import {
  BannerCB,
  Benefits,
  Consult,
  Footer,
  Navbar,
  Tutorial,
} from "@/Components"

function Home() {
  return (
    <>
      <Navbar />
      <BannerCB />
      <Benefits />
      <Tutorial />
      <Consult />
      <Footer />
    </>
  )
}

export default Home
