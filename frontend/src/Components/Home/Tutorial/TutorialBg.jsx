import appImg from "@/assets/cbapp.svg"

function TutorialBg() {
  return (
    <section className="bg-bgBanner1 bg-no-repeat bg-contain bg-right-bottom hidden md:block lg:w-9/1">
      <div className="flex w-full justify-center items-center">
        <img
          src={appImg}
          alt="CB-Banner"
          className="hidden md:block md:h-[40vh] lg:w-9/12"
        />
      </div>
    </section>
  )
}

export default TutorialBg
