import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import PageHeading from "../components/PageHeading";
import Container from "../components/container";
import SectionTop from "../components/SectionTop";
import CategoryList from "../components/CategoryList";
import { img } from "../utils/img";

const tabs = [
  {
    id: "description",
    label: "Description",
    paragraphs: [
      `You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.`,
      `Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.`,
    ],
  },
  {
    id: "reviews",
    label: "Reviews (3)",
    paragraphs: [
      `Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.`,
      `Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.`,
    ],
  },
];

function TagList({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
        <span key={tag}>
          <a href="#">{tag}</a>
          {index < tags.length - 1 && ", "}
        </span>
      ))}
    </>
  );
}

function ProductDetails() {
  const [activeTab, setActiveTab] = useState("description");
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <PageHeading
        title="Modern Warfare® II"
        trail={[
          { label: "Home", to: "/" },
          { label: "Shop", to: "/shop" },
          { label: "Assasin Creed" },
        ]}
      />

      <section className="mt-[80px] lg:mt-[120px]">
        <Container>
          <div className="grid items-center gap-[45px] lg:grid-cols-2">
            <div className="lg:mr-[80px]">
              <img
                src={img("single-game.jpg")}
                alt="Modern Warfare II"
                className="w-full rounded-[25px]"
              />
            </div>

            <div>
              <h4 className="mb-[20px] text-[1.7rem] font-bold text-[#1e1e1e]">
                Call of Duty®: Modern Warfare® II
              </h4>
              <span className="text-[1.7rem] font-bold text-[#0071f8]">
                <span className="mr-[5px] text-[1.1rem] font-medium text-[#c8c8c8] line-through">
                  $28
                </span>
                $22
              </span>
              <p className="mb-[60px] mt-[50px] text-sm leading-7 text-[#4a4a4a]">
                LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                framework. This template is provided by TemplateMo and it is
                suitable for your gaming shop ecommerce websites. Feel free to
                use this for any purpose. Thank you.
              </p>
              <form
                className="flex items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="mr-[15px] h-[50px] w-[80px] rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] text-center"
                />
                <button
                  type="submit"
                  className="inline-flex h-[50px] items-center gap-[5px] rounded-[25px] bg-[#ee626b] px-[25px] text-[0.9rem] font-medium uppercase text-white transition-all duration-300 hover:bg-[#0071f8]"
                >
                  <FaShoppingBag /> ADD TO CART
                </button>
              </form>
              <ul className="mt-[60px] flex flex-col gap-[20px]">
                <li className="text-sm text-[#0071f8]">
                  <span className="inline-block w-[120px] text-[#aaa]">Game ID:</span>
                  COD MMII
                </li>
                <li className="text-sm text-[#0071f8]">
                  <span className="inline-block w-[120px] text-[#aaa]">Genre:</span>
                  <TagList tags={["Action", "Team", "Single"]} />
                </li>
                <li className="text-sm text-[#0071f8]">
                  <span className="inline-block w-[120px] text-[#aaa]">Multi-tags:</span>
                  <TagList tags={["War", "Battle", "Royal"]} />
                </li>
              </ul>
            </div>
          </div>

          <div className="my-[50px] h-[1px] w-full bg-[#eee] lg:my-[80px]"></div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="rounded-[25px] bg-[#f7f7f7] p-[25px] md:p-[60px]">
            <div className="flex">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-base font-semibold md:text-xl ${
                    index < tabs.length - 1
                      ? "mr-[15px] border-r border-[#d7d7d7] pr-[15px] md:mr-[30px] md:pr-[30px]"
                      : ""
                  } ${activeTab === tab.id ? "text-[#0071f8]" : "text-[#1e1e1e]"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-[30px] flex flex-col gap-[20px]">
              {currentTab.paragraphs.map((text, index) => (
                <p key={index} className="text-sm leading-7 text-[#4a4a4a]">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-[80px] lg:mt-[120px]">
        <Container>
          <SectionTop subtitle="Action" title="Related Games" />
          <CategoryList />
        </Container>
      </section>
    </>
  );
}

export default ProductDetails;