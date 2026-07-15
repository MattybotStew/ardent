import Image from "next/image";

const tabs = [
  "Team",
  "Debt",
  "Development",
  "Investor Relations",
  "Asset Management",
  "Finance & Operations",
];

const teamMembers = [
  {
    name: "Matt Shulman",
    title: "Partner & CEO",
    email: "mshulman@theardentcompanies.com",
  },
  {
    name: "Dror Bezalel",
    title: "Partner & CFO",
    email: "dbezalel@theardentcompanies.com",
  },
  {
    name: "Todd Terwilliger",
    title: "Partner",
    email: "tterwilliger@theardentcompanies.com",
  },
  {
    name: "Michael DeGance",
    title: "Partner & Managing Director",
    email: "mdegance@theardentcompanies.com",
  },
  {
    name: "Scott Werbel",
    title: "Partner & Managing Director",
    email: "swerbel@theardentcompanies.com",
  },
  {
    name: "Thomas Olson",
    title: "Partner & Managing Director",
    email: "tolson@theardentcompanies.com",
  },
];

function TeamCard({
  name,
  title,
  email,
}: {
  name: string;
  title: string;
  email: string;
}) {
  return (
    <article className="flex flex-1 flex-col overflow-hidden">
      <div className="relative h-[295px] overflow-hidden rounded-t-[26px]">
        <Image
          src="/images/team-photo.jpg"
          alt={name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="space-y-6 rounded-b-[26px] bg-white p-[30px]">
        <div className="space-y-3">
          <h3 className="text-[22px] font-bold leading-6 text-[#333]">{name}</h3>
          <p className="text-[16px] leading-[21px] text-charcoal">{title}</p>
        </div>
        <a
          href={`mailto:${email}`}
          className="font-[family-name:var(--font-noto-sans)] text-[16px] font-bold leading-[1.7] text-ardent-blue hover:underline"
        >
          {email}
        </a>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="w-full">
      <div className="flex flex-col items-center gap-20 px-[100px] py-[120px]">
        <h2 className="text-center text-[48px] font-bold leading-[1.05] text-ardent-blue">
          Leadership & Team
        </h2>

        <div className="flex w-full max-w-[1200px] gap-[30px]">
          <div className="flex flex-1 flex-col gap-[5px]">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={`rounded-[20px] p-5 text-left text-[22px] font-bold leading-[1.05] ${
                  i === 0
                    ? "bg-ardent-blue text-white"
                    : "bg-ardent-light text-ardent-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="w-[847px] shrink-0 rounded-[26px] bg-ardent-light p-[46px]">
            <div className="flex flex-col gap-[46px]">
              {[0, 2, 4].map((start) => (
                <div key={start} className="flex gap-[30px]">
                  <TeamCard {...teamMembers[start]} />
                  <TeamCard {...teamMembers[start + 1]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
