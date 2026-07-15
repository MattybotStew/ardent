import Image from "next/image";

const platforms = [
  {
    image: "/ardent/images/debt-platform.jpg",
    title: "Debt Platform",
    subtitle: "Real Estate-Backed Lending",
    description:
      "Focused on transitional assets and value-add business plans for the development, redevelopment, and construction of commercial real estate, including specialized lending solutions for complex, time-sensitive, and opportunistic situations.",
  },
  {
    image: "/ardent/images/equity-platform.jpg",
    title: "Equity Platform",
    subtitle: "Real Estate Development & Opportunistic Investments",
    description:
      "Focused on land, self-storage, retail and mixed-use development, redevelopment, and repositioning of commercial real estate assets, with particular expertise in rezoning and entitlement execution, as well as complex, distressed, off-market, and other opportunistic transactions requiring creative structuring and operational flexibility.",
  },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="w-full"
      aria-labelledby="platforms-heading"
    >
      <h2 id="platforms-heading" className="sr-only">
        Investment Platforms
      </h2>
      <div className="container-site flex gap-2.5 max-lg:flex-col">
        {platforms.map((platform) => (
          <div
            key={platform.title}
            className="relative flex h-[560px] min-w-0 flex-1 flex-col justify-end overflow-hidden rounded-[20px] px-10 pb-12 pt-40 max-lg:h-auto max-lg:min-h-[380px] max-lg:px-6 max-lg:pb-10 max-lg:pt-32"
          >
            <Image
              src={platform.image}
              alt={platform.title}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="absolute inset-0 z-0 rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 z-[1] rounded-[20px] bg-gradient-to-t from-[#0a2137] via-[#0a2137]/50 to-transparent" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-[1.75rem] font-bold leading-[1.15] text-white max-lg:text-[1.5rem]">
                {platform.title}
              </h3>
              <p className="text-body font-bold text-white/85">
                {platform.subtitle}
              </p>
              <p className="text-[0.9375rem] leading-[1.55] text-white/80">
                {platform.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
