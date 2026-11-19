import SectionHeading from "./SectionHeading";
import MainButton from "./MainButton";

function SectionTop({ subtitle, title, centerOnSmall = false }) {
  return (
    <div className="mb-[40px] flex items-center justify-between md:mb-[70px]">
      <SectionHeading
        subtitle={subtitle}
        title={title}
        className={centerOnSmall ? "w-full text-center lg:w-auto lg:text-left" : ""}
      />
      <div className="hidden lg:block">
        <MainButton to="/shop">View All</MainButton>
      </div>
    </div>
  );
}

export default SectionTop;