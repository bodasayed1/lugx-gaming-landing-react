import Container from "../container";
import SectionTop from "../SectionTop";
import GameCard from "../GameCard";
import { trendingGames } from "../../data/games";

function Trending() {
  return (
    <section className="mt-[80px] lg:mt-[120px]">
      <Container>
        <SectionTop subtitle="Trending" title="Trending Games" />
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {trendingGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Trending;