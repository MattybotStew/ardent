import Image from "next/image";

export default function MarketPresence() {
  return (
    <section id="presence" className="w-full px-[34px] pb-[34px]">
      <div className="flex flex-col items-center gap-10 rounded-[20px] bg-ardent-light px-20 py-[120px]">
        <div className="max-w-[890px] space-y-10 text-center">
          <h2 className="text-[48px] font-bold leading-[1.05] text-ardent-blue">
            Broad Market Presence
          </h2>
          <p className="text-[18px] leading-[1.6] text-ardent-blue/80">
            Deploying capital across diverse markets and asset classes through
            disciplined
            <br />
            investment strategies and long-standing industry relationships
          </p>
        </div>

        <div className="overflow-hidden rounded-[20px]">
          <div className="relative h-[656px] w-[1052px] overflow-hidden rounded-[14px] bg-white">
            <Image
              src="/images/map-us.png"
              alt="United States map showing Ardent presence"
              width={818}
              height={517}
              className="absolute left-[43px] top-[69px]"
            />
            <div className="absolute right-[50px] top-[297px] h-[245px] w-[156px]">
              <Image
                src="/images/map-uk.png"
                alt="United Kingdom"
                fill
                className="object-contain"
              />
              <span className="absolute bottom-[24%] right-[24%] font-[family-name:var(--font-archivo)] text-[19px] font-bold text-white">
                UK
              </span>
            </div>
            <div className="absolute bottom-[62px] left-[43px] flex items-center gap-[7px]">
              <div className="size-[22px] rounded-[3px] bg-ardent-blue" />
              <span className="text-[19px] text-ardent-blue">Ardent Presence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
