import Container from "../container";
import SectionTop from "../SectionTop";
import TopGameCard from "../TopGameCard";
import { topGames } from "../../data/games";

function MostPlayed() {
  return (
    <section id="most-played" className="mt-[80px] scroll-mt-[40px] rounded-[60px] bg-[#f7f7f7] py-[100px] lg:mt-[120px] lg:rounded-[150px]">
      <Container>
        <SectionTop subtitle="TOP GAMES" title="Most Played" centerOnSmall />
        <div className="grid grid-cols-1 gap-x-[30px] gap-y-[50px] sm:grid-cols-2 lg:grid-cols-6">
          {topGames.map((game) => (
            <TopGameCard key={game.id} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MostPlayed;