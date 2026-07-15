type Stat = {
  value: React.ReactNode;
  label: React.ReactNode;
};

const row1: Stat[] = [
  { value: <>14<span className="text-[60px] tracking-[-0.6px]">+</span></>, label: "Years IN BUSINESS" },
  { value: <>355<span className="text-[60px] tracking-[-0.6px]">+</span></>, label: "Transactions" },
  { value: <>94<span className="text-[60px] tracking-[-0.6px]">%</span></>, label: "Investor Retention" },
];

const row2: Stat[] = [
  {
    value: (
      <>
        <span className="text-[60px] tracking-[-0.6px]">$</span>6.8B
        <span className="text-[60px] tracking-[-0.6px]">+</span>
      </>
    ),
    label: "Invested Capital",
  },
  { value: "55+", label: "Team Members" },
  {
    value: <>17<span className="text-[60px] tracking-[-0.6px]">+</span></>,
    label: (
      <>
        Years Investment
        <br />
        Committee Continuity
      </>
    ),
  },
];

const row3: Stat[] = [
  {
    value: "20+",
    label: (
      <>
        Years Average Senior
        <br />
        Leadership Experience
      </>
    ),
  },
];

function StatRow({ stats, centered = false }: { stats: Stat[]; centered?: boolean }) {
  return (
    <div
      className={`flex w-full max-w-[1200px] items-center justify-center gap-2.5 ${centered ? "" : ""}`}
    >
      <div className="h-full w-px shrink-0 bg-[rgba(51,51,51,0.2)]" />
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-1 flex-col items-center py-10">
          <div className="text-center text-ardent-blue">
            <p className="text-[100px] leading-[2] tracking-[-1px]">{stat.value}</p>
            <p className="text-[18px] uppercase leading-[2] tracking-[-0.9px]">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
      <div className="h-full w-px shrink-0 bg-[rgba(51,51,51,0.2)]" />
    </div>
  );
}

export default function Stats() {
  return (
    <section id="at-a-glance" className="w-full">
      <div className="flex flex-col items-center gap-20 px-[100px] py-[120px]">
        <h2 className="max-w-[830px] text-center text-[48px] font-bold leading-[1.05] text-ardent-blue">
          Ardent at a Glance
        </h2>
        <div className="flex w-full flex-col gap-2.5">
          <StatRow stats={row1} />
          <StatRow stats={row2} />
          <div className="flex w-full max-w-[1200px] items-center justify-center gap-2.5">
            <div className="h-full w-px shrink-0 bg-[rgba(51,51,51,0.3)]" />
            <div className="flex w-[378px] flex-col items-center py-10">
              <div className="text-center text-ardent-blue">
                <p className="text-[118px] leading-[2]">{row3[0].value}</p>
                <p className="text-[18px] uppercase leading-[1.2] tracking-[-0.9px]">
                  {row3[0].label}
                </p>
              </div>
            </div>
            <div className="h-full w-px shrink-0 bg-[rgba(51,51,51,0.3)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
