import TutorialBg from "./TutorialBg"
import TutorialText from "./TutorialText"

function Tutorial() {
  return (
    <main className="grid md:grid-cols-2 gap-2 py-12 sm:py-20 mx-auto">
      <TutorialText />
      <TutorialBg />
    </main>
  )
}

export default Tutorial
