import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "./container";
import { img } from "../utils/img";

const links = [
  { name: "Home", active: true },
  { name: "Our Shop", active: false },
  { name: "Product Details", active: false },
  { name: "Contact Us", active: false },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
  };

  return (
    <header
      className={`left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "fixed top-0 rounded-b-[25px] bg-[#0071f8] shadow-[0_0_10px_rgba(0,0,0,0.15)]"
          : "absolute top-0 md:top-[40px]"
      }`}
    >
      <Container>
        <nav className="relative flex h-[80px] items-center justify-between">
          <a href="#" onClick={handleClick}>
            <img
              src={img("logo.png")}
              alt="Lugx logo"
              className={`w-[110px] ${scrolled ? "" : "lg:w-[158px]"}`}
            />
          </a>

          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute left-0 right-0 top-full overflow-hidden rounded-b-[25px] bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] md:static md:flex md:items-center md:gap-[10px] md:overflow-visible md:rounded-none md:bg-transparent md:shadow-none xl:gap-[20px]`}
          >
            {links.map((link) => (
              <li key={link.name} className="border-t border-[#ddd] md:border-0">
                <a
                  href="#"
                  onClick={handleClick}
                  className={`block h-[50px] text-center text-[0.9rem] capitalize leading-[50px] tracking-[0.25px] transition-all duration-300 md:h-[40px] md:rounded-[20px] md:px-[10px] md:font-light md:leading-[40px] lg:px-[20px] ${
                    link.active
                      ? "text-[#ee626b] md:bg-white/10 md:text-white"
                      : "text-[#1e1e1e] md:text-white md:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="border-t border-[#ddd] md:border-0">
              <a
                href="#"
                onClick={handleClick}
                className="block h-[50px] text-center text-[0.9rem] capitalize leading-[50px] tracking-[0.25px] text-[#1e1e1e] md:h-[40px] md:rounded-[20px] md:bg-[#ee626b] md:px-[10px] md:font-medium md:uppercase md:leading-[40px] md:text-white lg:px-[20px]"
              >
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;