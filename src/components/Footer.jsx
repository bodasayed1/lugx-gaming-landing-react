import Container from "./container";
import { img } from "../utils/img";

function Footer() {
  return (
    <footer
      className="mt-[100px] min-h-[150px] rounded-t-[60px] bg-[#0071f8] bg-cover bg-no-repeat lg:mt-[150px] lg:rounded-t-[150px]"
      style={{ backgroundImage: `url(${img("footer-bg.jpg")})` }}
    >
      <Container>
        <p className="py-[30px] text-center text-base font-normal leading-7 text-white md:py-0 md:leading-[90px]">
          Copyright © 2048 Bdabido Company. All rights reserved.&nbsp;&nbsp;
          <a
            href="https://github.com/bodasayed1"
            target="_blank"
            rel="nofollow noreferrer"
            className="text-white transition-all duration-300 hover:opacity-75"
          >
            Design: BodaSayed
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;