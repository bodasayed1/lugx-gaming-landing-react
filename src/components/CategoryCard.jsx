import { img } from "../utils/img";

function CategoryCard({ image }) {
  return (
    <div className="rounded-[25px] bg-[#0071f8] text-center">
      <h4 className="p-[22px] text-[1.1rem] font-semibold text-white">Action</h4>
      <div className="overflow-hidden rounded-[25px]">
        <a href="#">
          <img src={img(image)} alt="Action" className="w-full" />
        </a>
      </div>
    </div>
  );
}

export default CategoryCard;