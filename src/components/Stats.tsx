type Stat = {
  id: string;
  value: React.ReactNode;
  label: React.ReactNode;
  largeValue?: boolean;
};

const stats: Stat[] = [
  {
    id: "years-business",
    value: (
      <>
        14<span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: "Years in Business",
  },
  {
    id: "transactions",
    value: (
      <>
        355<span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: "Transactions",
  },
  {
    id: "retention",
    value: (
      <>
        94<span className="text-stat-accent tracking-[-0.6px]">%</span>
      </>
    ),
    label: "Investor Retention",
  },
  {
    id: "capital",
    value: (
      <>
        <span className="text-stat-accent tracking-[-0.6px]">$</span>6.8B
        <span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: "Invested Capital",
  },
  {
    id: "team",
    value: (
      <>
        55<span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: "Team Members",
    largeValue: true,
  },
  {
    id: "committee",
    value: (
      <>
        17<span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: (
      <>
        Years Investment
        <br />
        Committee Continuity
      </>
    ),
  },
  {
    id: "leadership",
    value: (
      <>
        20<span className="text-stat-accent tracking-[-0.6px]">+</span>
      </>
    ),
    label: (
      <>
        Years Average Senior
        <br />
        Leadership Experience
      </>
    ),
    largeValue: true,
  },
];

function StatCell({ value, label, largeValue = false }: Omit<Stat, "id">) {
  return (
    <div className="flex flex-col items-center justify-center px-[30px] py-10 text-center text-ardent-blue">
      <p
        className={`mb-0 font-normal tracking-[-1px] ${
          largeValue ? "text-stat-lg" : "text-stat"
        }`}
      >
        {value}
      </p>
      <p className="text-body uppercase tracking-[-0.9px]">
        {label}
      </p>
    </div>
  );
}

function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-px shrink-0 self-stretch bg-[rgba(51,51,51,0.2)] max-lg:h-px max-lg:w-full max-lg:self-auto ${className}`}
    />
  );
}

function StatRow({ rowStats }: { rowStats: Stat[] }) {
  const items: React.ReactNode[] = [
    <Divider key="start" className="max-lg:hidden" />,
  ];

  rowStats.forEach((stat, index) => {
    if (index > 0) {
      items.push(<Divider key={`divider-${stat.id}`} />);
    }
    items.push(
      <div key={stat.id} className="min-w-0 flex-1">
        <StatCell {...stat} />
      </div>,
    );
  });

  items.push(<Divider key="end" />);

  return <div className="flex w-full items-stretch gap-2.5 max-lg:flex-col">{items}</div>;
}

export default function Stats() {
  return (
    <section id="at-a-glance" className="w-full">
      <div className="container-site flex flex-col items-center gap-20">
        <h2 className="text-heading-1 max-w-[830px] text-center font-bold text-ardent-blue">
          Ardent at a Glance
        </h2>

        <div className="flex w-full flex-col gap-2.5">
          <StatRow rowStats={stats.slice(0, 3)} />
          <StatRow rowStats={stats.slice(3, 6)} />
          <div className="flex items-stretch justify-center gap-2.5 max-lg:w-full max-lg:flex-col">
            <Divider className="max-lg:hidden" />
            <div className="w-[378px] max-lg:w-full">
              <StatCell {...stats[6]} />
            </div>
            <Divider className="max-lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
