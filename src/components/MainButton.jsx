import { Link } from "react-router-dom";

function MainButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-block h-[50px] rounded-[25px] bg-[#ee626b] px-[30px] text-sm font-semibold uppercase leading-[50px] text-white transition-all duration-300 hover:bg-[#0071f8]"
    >
      {children}
    </Link>
  );
}

export default MainButton;