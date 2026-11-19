import { img } from "../utils/img";

function TopGameCard({ game }) {
  return (
    <div className="group relative rounded-[25px] bg-white text-center">
      <div className="overflow-hidden rounded-[25px]">
        <a href="#">
          <img src={img(game.image)} alt={game.name} className="w-full" />
        </a>
      </div>
      <div className="px-[15px] pb-[40px] pt-[20px]">
        <span className="mb-[5px] inline-block text-sm text-[#7a7a7a]">
          {game.category}
        </span>
        <h4 className="text-[1.1rem] font-semibold text-[#1e1e1e] transition-all duration-300 group-hover:text-[#0071f8]">
          {game.name}
        </h4>
        <a
          href="#"
          className="absolute -bottom-[20px] left-1/2 h-[40px] -translate-x-1/2 rounded-[20px] bg-[#ee626b] px-[15px] text-[0.9rem] font-semibold uppercase leading-[40px] text-white transition-all duration-300 group-hover:bg-[#0071f8]"
        >
          Explore
        </a>
      </div>
    </div>
  );
}

export default TopGameCard;