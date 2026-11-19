import Container from "../container";
import SectionHeading from "../SectionHeading";
import CategoryList from "../CategoryList";

function Categories() {
  return (
    <section className="mt-[80px] lg:mt-[120px]">
      <Container>
        <SectionHeading
          subtitle="Categories"
          title="Top Categories"
          className="mb-[40px] text-center md:mb-[70px]"
        />
        <CategoryList />
      </Container>
    </section>
  );
}

export default Categories;