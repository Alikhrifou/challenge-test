import { BiCheck } from "react-icons/bi";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { IconImage } from "../ui/IconImage";
import { PRICING_STATS, PRICING_PLANS } from "../../constants";
import type { PricingPlan } from "../../types";

/** Individual pricing plan card */
const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  const { isPopular } = plan;

  return (
    <article
      className={`bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 border transition-all flex flex-col ${
        isPopular
          ? "border-red-300 shadow-xl relative z-10 lg:scale-105"
          : "border-slate-100 shadow-sm"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
          Populaire
        </span>
      )}

      {/* Plan Header */}
      <div className="mb-6 sm:mb-8">
        <IconImage src={plan.icon} alt="" size="lg" className="mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          {plan.name}
        </h3>
        <p
          className={`text-sm font-semibold mt-1 ${
            isPopular ? "text-red-600" : "text-green-600"
          }`}
        >
          {plan.subtitle}
        </p>
        <p className="mt-3 sm:mt-4 text-slate-500 text-sm leading-relaxed">
          {plan.description}
        </p>
        <p className="mt-2 text-slate-400 text-xs italic">
          Tarification sur mesure selon vos volumes
        </p>
      </div>

      {/* Feature List */}
      <div className="pt-6 sm:pt-8 mb-6 sm:mb-8 flex-grow">
        <ul className="space-y-3 sm:space-y-4" role="list">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-slate-600"
            >
              <BiCheck
                size={18}
                className={`shrink-0 mt-0.5 ${
                  isPopular ? "text-red-600" : "text-green-600"
                }`}
                aria-hidden="true"
              />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Button
          variant={plan.variant}
          className={`w-full ${
            isPopular
              ? "bg-red-600 text-white border-transparent hover:bg-red-700"
              : "bg-white text-slate-900 border-slate-200 hover:bg-slate-50"
          }`}
          size="lg"
        >
          {plan.buttonText}
        </Button>
      </div>
    </article>
  );
};

export const Pricing = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
    aria-labelledby="pricing-heading"
  >
    <div className="max-w-7xl mx-auto">
      {/* Top Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-16 sm:mb-20 pb-12 sm:pb-16">
        {PRICING_STATS.map((stat) => (
          <div key={stat.title} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
              <IconImage src={stat.icon} alt="" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              {stat.title}
            </h4>
            <p className="text-xs text-slate-500">{stat.description}</p>
          </div>
        ))}
      </div>

      <SectionHeader
        title="Des formules adaptées à votre échelle"
        subtitle="Choisissez la solution qui correspond à vos besoins et votre ambition"
      />

      {/* Plans Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-4 sm:pt-8">
        {PRICING_PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);
