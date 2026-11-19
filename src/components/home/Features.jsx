import Container from "../container";
import { features } from "../../data/games";
import { img } from "../../utils/img";

function Features() {
  return (
    <section className="relative -mt-[80px]">
      <Container>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <a key={feature.id} href="#" className="group block">
              <div className="rounded-[25px] bg-white p-[35px] text-center shadow-[0_0_15px_rgba(0,0,0,0.15)]">
                <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#0071f8] transition-all duration-300 group-hover:bg-[#ee626b]">
                  <img src={img(feature.image)} alt={feature.title} className="w-[44px]" />
                </div>
                <h4 className="mt-[25px] text-[1.1rem] font-bold uppercase text-[#1e1e1e]">
                  {feature.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;