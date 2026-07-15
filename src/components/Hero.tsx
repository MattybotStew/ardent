import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container-site relative flex min-h-192 items-center overflow-hidden rounded-[20px] py-30 max-lg:min-h-[100dvh] max-lg:rounded-none max-lg:py-20">
        <Image
          src="/images/hero-bg.png"
          alt="City skyline"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
        <div
          className="absolute inset-0 rounded-[20px] max-lg:rounded-none"
          style={{
            background:
              "linear-gradient(34deg, #00315B 28.25%, rgba(0, 104, 193, 0.00) 64.56%)",
          }}
        />

        <div className="relative z-10 w-full px-16 max-lg:px-6">
          <div className="max-w-[560px] space-y-10 text-left max-lg:max-w-none">
            <h1 className="text-hero font-bold tracking-[-0.04em] text-white">
              Pursuing Opportunity.
              <br />
              Investing in Value.
            </h1>
            <p className="text-body-lg text-white/80">
              A cycle-tested real estate investment firm with a disciplined
              emphasis on structure, deploying capital across debt and equity
              investments through multiple market cycles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
