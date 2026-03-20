import { BiChevronRight } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "../ui/Button";
import { SectionHeader } from "../ui/SectionHeader";
import { IconImage } from "../ui/IconImage";
import { BACKOFFICE_TOOLS } from "../../constants";

const Badge = () => (
  <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-4 py-1 rounded-full">
    <IoSettingsOutline size={15} aria-hidden="true" />
    Backoffice tout-en-un
  </span>
);

export const Backoffice = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50"
    aria-labelledby="backoffice-heading"
  >
    <div className="max-w-7xl mx-auto text-center">
      <SectionHeader
        badge={<Badge />}
        title="Gérez tout depuis une interface unique"
        subtitle="Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {BACKOFFICE_TOOLS.map((tool) => (
          <article
            key={tool.title}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 text-left hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-green-600"
          >
            <div className="w-12 h-10 bg-green-50 rounded-md flex items-center justify-center mb-4">
              <IconImage src={tool.icon} alt="" />
            </div>
            <h3 className="font-bold mb-2 text-slate-900">{tool.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {tool.description}
            </p>
          </article>
        ))}
      </div>

      <Button className="mt-10 sm:mt-12 mx-auto">
        Demander un accès au backoffice{" "}
        <BiChevronRight size={18} aria-hidden="true" />
      </Button>
    </div>
  </section>
);
