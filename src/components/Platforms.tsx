import Image from "next/image";

const platforms = [
  {
    image: "/images/debt-platform.jpg",
    title: "Debt Platform",
    subtitle: "Real Estate-Backed Lending",
    description:
      "Focused on transitional assets and value-add business plans for the development, redevelopment, and construction of commercial real estate, including specialized lending solutions for complex, time-sensitive, and opportunistic situations.",
  },
  {
    image: "/images/equity-platform.jpg",
    title: "Equity Platform",
    subtitle: "Real Estate Development & Opportunistic Investments",
    description:
      "Focused on land, self-storage, retail and mixed-use development, redevelopment, and repositioning of commercial real estate assets, with particular expertise in rezoning and entitlement execution, as well as complex, distressed, off-market, and other opportunistic transactions requiring creative structuring and operational flexibility.",
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="flex w-full gap-[5px] px-[34px]">
      {platforms.map((platform) => (
        <div
          key={platform.title}
          className="relative flex h-[654px] flex-1 flex-col justify-end gap-[30px] overflow-hidden rounded-[20px] px-[60px] pb-20 pt-[260px]"
        >
          <Image
            src={platform.image}
            alt={platform.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-[#0a2137] via-[#0a2137]/40 to-transparent" />
          <div className="relative z-10 space-y-[30px]">
            <h3 className="text-[30px] font-bold leading-[1.15] text-white">
              {platform.title}
            </h3>
            <p className="text-[20px] font-bold leading-[1.3] text-white/80">
              {platform.subtitle}
            </p>
            <p className="text-[18px] leading-[1.6] text-white/80">
              {platform.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
