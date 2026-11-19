import Container from "../container";
import { img } from "../../utils/img";

function Banner() {
  return (
    <section
      className="rounded-b-[60px] bg-cover bg-bottom bg-no-repeat pb-[100px] pt-[150px] md:rounded-b-[150px] lg:py-[225px]"
      style={{ backgroundImage: `url(${img("banner-bg.jpg")})` }}
    >
      <Container>
        <div className="grid items-center gap-[45px] lg:grid-cols-12">
          <div className="text-center lg:col-span-6 lg:text-left">
            <h6 className="text-xl font-medium uppercase tracking-[0.5px] text-white">
              Welcome to lugx
            </h6>
            <h2 className="relative mb-[40px] mt-[20px] pb-[5px] text-4xl font-bold text-white lg:text-5xl">
              BEST GAMING SITE EVER!
              <span
                className="absolute bottom-0 left-[125px] hidden h-[12px] w-[202px] bg-no-repeat lg:block"
                style={{ backgroundImage: `url(${img("caption-dec.png")})` }}
              ></span>
            </h2>
            <p className="mb-[40px] text-sm leading-7 text-white lg:mb-[70px]">
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for
              commercial purposes. Please tell your friends about TemplateMo.
            </p>
            <form
              className="relative w-full lg:max-w-[450px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Type Something"
                className="h-[50px] w-full rounded-[25px] border-0 bg-white px-[25px] text-sm text-[#7a7a7a] outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-[50px] rounded-[25px] bg-[#ee626b] px-[25px] text-[0.9rem] font-medium uppercase text-white transition-all duration-300 hover:bg-[#0071f8]"
              >
                Search Now
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative">
              <img
                src={img("banner-image.jpg")}
                alt="Banner"
                className="w-full rounded-[25px]"
              />
              <span className="absolute right-[20px] top-[20px] rounded-[25px] bg-[#008af8] px-[15px] py-[4px] text-[1.4rem] font-bold uppercase text-white">
                $22
              </span>
              <span className="absolute bottom-[20px] left-[20px] h-[100px] w-[100px] rounded-full bg-[#ee626b] text-center text-[1.8rem] font-bold uppercase leading-[100px] text-white md:-bottom-[25px] md:-left-[25px]">
                -40%
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Banner;