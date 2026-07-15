import SvgImg from "@/components/SvgImg";

export default function MarketPresence() {
  return (
    <section id="presence" className="w-full">
      <div className="container-site flex flex-col items-center gap-10 rounded-[20px] bg-ardent-light px-20 py-30 max-lg:px-6 max-lg:py-20">
        <div className="max-w-[890px] space-y-10 text-center">
          <h2 className="text-heading-1 font-bold text-ardent-blue">
            Broad Market Presence
          </h2>
          <p className="text-body leading-[1.6] text-ardent-blue/80">
            Deploying capital across diverse markets and asset classes through
            disciplined{" "}
            <br className="max-lg:hidden" />
            investment strategies and long-standing industry relationships
          </p>
        </div>

        {/* Desktop: fixed artboard composition */}
        <div className="w-full overflow-hidden rounded-[20px] max-lg:hidden">
          <div className="relative mx-auto h-[656px] w-full max-w-[1052px] overflow-hidden rounded-[14px] bg-white">
            <SvgImg
              src="/images/map-us.svg"
              alt="United States map showing Ardent presence"
              width={818}
              height={517}
              className="absolute left-[43px] top-[69px] h-[517px] w-[818px]"
            />
            <SvgImg
              src="/images/map-uk.svg"
              alt="United Kingdom map showing Ardent presence"
              width={156}
              height={245}
              className="absolute right-[50px] top-[297px] h-[245px] w-[156px]"
            />
            <div className="absolute bottom-[62px] left-[43px] flex items-center gap-[7px]">
              <div className="size-[22px] rounded-[3px] bg-ardent-blue" aria-hidden="true" />
              <span className="text-body text-ardent-blue">Ardent Presence</span>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: stacked, fluid maps */}
        <div className="hidden w-full max-w-[1052px] flex-col items-center gap-8 rounded-[14px] bg-white p-6 max-lg:flex">
          <figure className="w-full space-y-3">
            <figcaption className="text-small font-medium uppercase tracking-wide text-ardent-blue">
              United States
            </figcaption>
            <SvgImg
              src="/images/map-us.svg"
              alt="United States map showing Ardent presence"
              width={818}
              height={517}
              className="h-auto w-full"
            />
          </figure>
          <figure className="mx-auto w-full max-w-[200px] space-y-3">
            <figcaption className="text-center text-small font-medium uppercase tracking-wide text-ardent-blue">
              United Kingdom
            </figcaption>
            <SvgImg
              src="/images/map-uk.svg"
              alt="United Kingdom map showing Ardent presence"
              width={156}
              height={245}
              className="mx-auto h-auto w-full"
            />
          </figure>
          <div className="flex items-center gap-[7px]">
            <div className="size-[22px] shrink-0 rounded-[3px] bg-ardent-blue" aria-hidden="true" />
            <span className="text-body text-ardent-blue">Ardent Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
