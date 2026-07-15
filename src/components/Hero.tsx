import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-[34px]">
      <div className="relative flex min-h-[768px] items-center overflow-hidden rounded-[20px] py-[120px]">
        <Image
          src="/images/hero.jpg"
          alt="City skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2137]/80 via-[#0a2137]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
          <div className="max-w-[768px] space-y-12">
            <h1 className="text-[72px] font-bold leading-[1.05] tracking-[-3px] text-white">
              Pursuing Opportunity.
              <br />
              Investing in Value.
            </h1>
            <p className="max-w-[600px] rounded-lg bg-[#0a2137]/70 p-6 text-[20px] leading-[1.6] text-white/80">
              Ardent is a cycle-tested, privately held real estate investment
              firm focused on identifying and executing differentiated
              opportunities across debt and equity investments, with a
              disciplined emphasis on structure. Through a vertically integrated
              platform of capital, operational capabilities, proprietary deal
              flow, and rigorous underwriting, Ardent has built a strong track
              record through multiple market cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
