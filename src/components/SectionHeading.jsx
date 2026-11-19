function SectionHeading({ subtitle, title, className = "" }) {
  return (
    <div className={className}>
      <h6 className="text-[0.9rem] font-bold uppercase text-[#ee626b]">
        {subtitle}
      </h6>
      <h2 className="mt-[20px] text-3xl font-bold capitalize leading-[44px] text-[#1e1e1e] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;