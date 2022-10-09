import BannerImg from "./BannerImg"
import BannerText from "./BannerText"

function BannerCB() {
  return (
    <main className="grid md:grid-cols-2 gap-8 pt-32 pb-12 sm:pb-20 sm:pt-40">
      <BannerImg />
      <BannerText />
    </main>
  )
}

export default BannerCB
