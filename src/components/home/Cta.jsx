import Container from "../container";
import SectionHeading from "../SectionHeading";
import MainButton from "../MainButton";
import { img } from "../../utils/img";

function Cta() {
  return (
    <section className="relative isolate mt-[80px] lg:mt-[120px]">
      <div
        className="absolute left-1/2 top-0 -z-10 hidden h-[510px] w-[550px] -translate-x-1/2 rounded-[25px] bg-cover bg-center lg:block"
        style={{ backgroundImage: `url(${img("cta-bg.jpg")})` }}
      ></div>
      <Container>
        <div className="grid gap-[30px] lg:grid-cols-12">
          <div className="rounded-[25px] bg-[#f7f7f7] p-[30px] lg:col-span-5 lg:mt-[80px] lg:p-[80px]">
            <SectionHeading
              subtitle="Our Shop"
              title={
                <>
                  Go Pre-Order Buy &amp; Get Best{" "}
                  <span className="text-[#0071f8]">Prices</span> For You!
                </>
              }
              className="mb-[50px] lg:mr-[30px]"
            />
            <p className="text-base font-semibold leading-7 text-[#4a4a4a]">
              Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
              incididunt.
            </p>
            <div className="mt-[50px]">
              <MainButton to="/shop">Shop Now</MainButton>
            </div>
          </div>

          <div className="rounded-[25px] bg-[#f7f7f7] p-[30px] lg:col-span-5 lg:col-start-8 lg:self-end lg:px-[60px] lg:py-[80px]">
            <SectionHeading
              subtitle="NEWSLETTER"
              title={
                <>
                  Get Up To $100 Off Just Buy{" "}
                  <span className="text-[#0071f8]">Subscribe</span> Newsletter!
                </>
              }
              className="mb-[50px]"
            />
            <form
              className="relative w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email..."
                className="h-[50px] w-full rounded-[25px] border-0 bg-white px-[25px] text-sm text-[#7a7a7a] outline-none"
              />
              <button
                type="submit"
                className="mt-[15px] h-[50px] w-full rounded-[25px] bg-[#ee626b] px-[25px] text-[0.9rem] font-medium uppercase text-white transition-all duration-300 hover:bg-[#0071f8] md:absolute md:right-0 md:top-0 md:mt-0 md:w-auto"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Cta;