import PageHeading from "../components/PageHeading";
import Container from "../components/container";
import SectionHeading from "../components/SectionHeading";

const fieldStyle =
  "h-[50px] w-full rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] px-[20px] text-sm text-[#4a4a4a] outline-none focus:border-[#0071f8]";

function Contact() {
  return (
    <>
      <PageHeading
        title="Contact Us"
        trail={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      <section className="mt-[80px] lg:mt-[120px]">
        <Container>
          <div className="grid items-center gap-[45px] lg:grid-cols-2">
            <div className="rounded-[25px] bg-[#f7f7f7] p-[30px] md:p-[60px]">
              <SectionHeading
                subtitle="Contact Us"
                title="Say Hello!"
                className="mb-[50px]"
              />
              <p className="mb-[50px] text-sm leading-7 text-[#4a4a4a]">
                Lugx gaming Template is based on the latest React and Tailwind
                library. This template is provided by BodaSayed and it is
                suitable for your gaming shop ecommerce websites. Feel free to
                use this for any purpose. Thank you.
              </p>
              <ul className="flex flex-col gap-[30px] text-base text-[#aaa]">
                <li>
                  <span className="mb-[5px] block text-sm font-semibold text-[#4a4a4a]">
                    Address
                  </span>
                  10 Branched from Masjed Al Fath 
                </li>
                <li>
                  <span className="mb-[5px] block text-sm font-semibold text-[#4a4a4a]">
                    Phone
                  </span>
                  +20 1092292439
                </li>
                <li>
                  <span className="mb-[5px] block text-sm font-semibold text-[#4a4a4a]">
                    Email
                  </span>
                  <a href="mailto:abdelrahman.elsayed.193@gmail.com">abdelrahman.elsayed.193@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Alexandria%2C%20Egypt&output=embed"
                className="mb-[60px] h-[325px] w-full rounded-[23px] border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>

              <form
                className="grid gap-[30px] md:grid-cols-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="text" name="name" placeholder="Your Name..." required className={fieldStyle} />
                <input type="text" name="surname" placeholder="Your Surname..." required className={fieldStyle} />
                <input type="email" name="email" placeholder="Your E-mail..." required className={fieldStyle} />
                <input type="text" name="subject" placeholder="Subject..." className={fieldStyle} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="h-[130px] w-full resize-none rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] p-[20px] text-sm text-[#4a4a4a] outline-none focus:border-[#0071f8] md:col-span-2"
                ></textarea>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="h-[50px] rounded-[25px] bg-[#ee626b] px-[25px] text-[0.9rem] font-medium uppercase text-white transition-all duration-300 hover:bg-[#0071f8]"
                  >
                    Send Message Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Contact;