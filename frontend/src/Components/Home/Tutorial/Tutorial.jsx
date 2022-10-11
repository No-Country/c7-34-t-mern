import appImg from "@/assets/images/cbapp.webp"
import TutorialText from "./TutorialText"

function Tutorial() {
  return (
    <main className="grid md:grid-cols-2 gap-2 py-12 sm:py-20 mx-auto">
      <TutorialText />
      <section className="bg-bgBanner1 bg-no-repeat bg-contain bg-right-bottom hidden md:block lg:w-9/1">
        <div className="flex w-full justify-center items-center">
          <img
            src={appImg}
            alt="CB-Banner"
            className="hidden md:block md:h-[40vh] lg:w-9/12"
          />
        </div>
      </section>
    </main>
  )
}

export default Tutorial
