import { STEPS } from "../../constants";
import { SectionHeader } from "../ui/SectionHeader";
import { IconImage } from "../ui/IconImage";

export const Steps = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
    aria-labelledby="steps-heading"
  >
    <div className="max-w-7xl mx-auto">
      <SectionHeader
        title="Un parcours client simple et engageant"
        subtitle="De l'achat du produit à la récompense, en 5 étapes"
        className="mb-12 sm:mb-20"
      />

      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {STEPS.map((step) => {
          const isRed = step.variant === "red";
          return (
            <li
              key={step.step}
              className="flex flex-col items-center text-center relative"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 border-2 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative shadow-sm ${
                  isRed ? "border-red-200" : "border-green-200"
                }`}
              >
                <IconImage src={step.icon} alt="" />
                <span
                  className={`absolute -top-2 -right-3 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white font-bold ${
                    isRed ? "bg-red-500" : "bg-green-700"
                  }`}
                  aria-label={`Étape ${step.step}`}
                >
                  {step.step}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 px-2 sm:px-4 leading-relaxed">
                {step.description}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
