import ChariotIcon from '../../assets/chariotIcon.png';
import QrIcon from '../../assets/Qrcode-icon.png';
import LayerIcon from '../../assets/layers-icon.png';
import PuzzleIcon from '../../assets/puzzl-icon.png';
import GiftIcon from '../../assets/redGidt-icon.png';


const steps = [
  { icon: ChariotIcon, title: "Achat produit", desc: "Le client achète votre produit en magasin", step: 1,color: "text-[#16A34A]" },
  { icon: QrIcon, title: "Scan QR Code", desc: "Il scanne le code sur l'emballage", step: 2, color: "text-[#16A34A]" },
  { icon: LayerIcon, title: "Déblocage carte", desc: "Une carte digitale est débloquée", step: 3, color: "text-[#16A34A]" },
  { icon: PuzzleIcon, title: "Collection", desc: "Il complète sa collection", step: 4, color: "text-[#DC2626]" },
  { icon: GiftIcon, title: "Récompenses", desc: "Participe aux tirages", step: 5, color: "text-[#DC2626]" },
];

export const Steps = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0F172A]">Un parcours client simple et engageant</h2>
        <p className="mt-4 text-gray-500">De l'achat du produit à la récompense, en 5 étapes</p>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className={`w-16 h-16 border ${s.color} rounded-2xl flex items-center justify-center mb-6 relative shadow-md`}>
                <img src={s.icon} alt={s.title} className={s.color || "text-[#16A34A]"} />
                <span className={`absolute -top-2  -right-10 w-6 h-6 rounded-full text-xs flex items-center justify-center text-white ${s.step > 3 ? 'bg-red-500' : 'bg-[#0B6B3A]'}`}>
                  {s.step}
                </span>
              </div>
              <h4 className="font-bold mb-2">{s.title}</h4>
              <p className="text-xs text-gray-400 px-4 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};