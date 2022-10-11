import { benefits } from "@/helpers/benefits"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(0)
  return (
    <section className="bg-[#FAFAFA] p-8 w-full flex flex-col items-center font-general shadow-sm">
      <h2 className="mb-10 md:mb-20 text-title1 sm:text-bold_title font-semibold font-general">
        {" "}
        ¿Por qué Utilizar los Bolsillos?{" "}
      </h2>
      <div className="flex items-center sm:items-start sm:grid grid-cols-2 lg:flex sm:gap-10">
        <span
          className="sm:hidden hover:cursor-pointer"
          onClick={() => {
            if (selectedBenefit > 0) setSelectedBenefit(selectedBenefit - 1)
          }}
        >
          <IoIosArrowBack
            size={52}
            color={`${selectedBenefit === 0 ? "transparent" : ""}`}
          />
        </span>
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className={`sm:w-52 sm:flex sm:flex-col sm:items-center ${
              selectedBenefit === benefit.id
                ? "w-52 flex flex-col items-center mx-2"
                : "hidden"
            }`}
          >
            <span className="h-40 w-40 sm:h-52 sm:w-52 p-6 mb-6 flex justify-center items-center rounded-full border border-gray">
              <img src={benefit.icon} alt="benefit-icon" />
            </span>
            <h4 className="mb-6 text-title2 text-center font-semibold">
              {benefit.title}
            </h4>
            <p>{benefit.description}</p>
          </article>
        ))}
        <span
          className="sm:hidden hover:cursor-pointer"
          onClick={() => {
            if (selectedBenefit < benefits.length - 1)
              setSelectedBenefit(selectedBenefit + 1)
          }}
        >
          <IoIosArrowForward
            size={52}
            color={`${
              selectedBenefit === benefits.length - 1 ? "transparent" : ""
            }`}
          />
        </span>
      </div>
    </section>
  )
}

export default BenefitsSection
