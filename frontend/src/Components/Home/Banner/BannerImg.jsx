import CBanner from "@/assets/Coinbook-1.webp"

function BannerImg() {
  return (
    <section className="bg-bgBanner bg-no-repeat bg-contain bg-center">
      <div className="flex w-full justify-center">
        <img src={CBanner} alt="CB-Banner" className="w-[30rem] md:w-[45rem]" />
      </div>
    </section>
  )
}

export default BannerImg
