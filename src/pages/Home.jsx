import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Trending from "../components/home/Trending";
import MostPlayed from "../components/home/MostPlayed";
import Categories from "../components/home/Categories";
import Cta from "../components/home/Cta";

function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Trending />
      <MostPlayed />
      <Categories />
      <Cta />
    </>
  );
}

export default Home;