function MainButton({ href = "#", children }) {
  return (
    <a
      href={href}
      className="inline-block h-[50px] rounded-[25px] bg-[#ee626b] px-[30px] text-sm font-semibold uppercase leading-[50px] text-white transition-all duration-300 hover:bg-[#0071f8]"
    >
      {children}
    </a>
  );
}

export default MainButton;