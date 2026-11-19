import { useState } from "react";
import PageHeading from "../components/PageHeading";
import Container from "../components/container";
import GameCard from "../components/GameCard";
import { shopGames, shopFilters } from "../data/games";

const pages = ["<", "1", "2", "3", ">"];

function Shop() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleGames = shopGames.filter(
    (game) => activeFilter === "all" || game.types.includes(activeFilter)
  );

  return (
    <>
      <PageHeading
        title="Our Shop"
        trail={[{ label: "Home", to: "/" }, { label: "Our Shop" }]}
      />

      <section className="mt-[80px] lg:mt-[120px]">
        <Container>
          <div className="mb-[40px] flex flex-wrap justify-center gap-[10px] md:mb-[70px]">
            {shopFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-[25px] px-[10px] py-[8px] text-[0.8rem] font-semibold uppercase transition-all duration-300 lg:px-[20px] lg:text-[0.9rem] ${
                  activeFilter === filter.value
                    ? "bg-[#ee626b] text-white"
                    : "bg-[#eee] text-[#1e1e1e] hover:text-[#ee626b]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
            {visibleGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="mt-[50px] flex justify-center gap-[10px]">
            {pages.map((page) => (
              <button
                key={page}
                className={`h-[40px] w-[40px] rounded-full text-[0.9rem] font-semibold transition-all duration-300 hover:bg-[#0071f8] hover:text-white ${
                  page === "2" ? "bg-[#0071f8] text-white" : "bg-[#eee] text-[#1e1e1e]"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Shop;