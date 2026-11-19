import { FaShoppingBag } from "react-icons/fa";
import { img } from "../utils/img";

function GameCard({ game }) {
  return (
    <div className="group relative overflow-hidden rounded-[25px] bg-[#eee]">
      <div className="relative overflow-hidden rounded-[25px]">
        <a href="#">
          <img src={img(game.image)} alt={game.name} className="w-full" />
        </a>
        <span className="absolute right-[20px] top-[20px] rounded-[10px] bg-[#008af8] px-[15px] pb-[6px] pt-[8px] text-right text-[1.1rem] font-semibold uppercase text-white">
          {game.oldPrice && (
            <span className="block text-sm font-normal line-through">
              ${game.oldPrice}
            </span>
          )}
          ${game.price}
        </span>
      </div>
      <div className="p-[25px]">
        <span className="mb-[5px] inline-block text-sm text-[#7a7a7a]">
          {game.category}
        </span>
        <h4 className="text-[1.1rem] font-semibold text-[#1e1e1e] transition-all duration-300 group-hover:text-[#0071f8]">
          {game.name}
        </h4>
        <a
          href="#"
          className="absolute bottom-[25px] right-[25px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ee626b] text-white transition-all duration-300 group-hover:bg-[#0071f8]"
        >
          <FaShoppingBag />
        </a>
      </div>
    </div>
  );
}

export default GameCard;