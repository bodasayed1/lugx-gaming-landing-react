import { Link } from "react-router-dom";
import Container from "./container";
import { img } from "../utils/img";

function PageHeading({ title, trail }) {
  return (
    <div
      className="rounded-b-[60px] bg-cover bg-bottom bg-no-repeat pb-[100px] pt-[140px] text-center md:rounded-b-[150px] lg:pt-[200px]"
      style={{ backgroundImage: `url(${img("page-heading-bg.jpg")})` }}
    >
      <Container>
        <h3 className="mb-[20px] text-3xl font-bold uppercase text-white md:text-5xl">
          {title}
        </h3>
        <span className="inline-block text-base text-white">
          {trail.map((item, index) => (
            <span key={item.label}>
              {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
              {index < trail.length - 1 && " > "}
            </span>
          ))}
        </span>
      </Container>
    </div>
  );
}

export default PageHeading;