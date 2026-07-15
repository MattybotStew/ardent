const contactSections = [
  {
    title: "Investing With Us",
    email: "InvestorRelations@TheArdentCompanies.com",
  },
  {
    title: "Partnering With Us",
    email: "Info@TheArdentCompanies.com",
  },
  {
    title: "Working For Us",
    email: "Careers@TheArdentCompanies.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-ardent-blue px-[121px] py-10">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-[100px]">
        <div className="flex flex-1 flex-col gap-2.5">
          {contactSections.map((section, i) => (
            <div key={section.title}>
              <div className="p-10 text-center">
                <div className="space-y-6">
                  <h3 className="text-[36px] font-bold leading-[1.1] tracking-[-1px] text-white">
                    {section.title}
                  </h3>
                  <a
                    href={`mailto:${section.email}`}
                    className="text-[20px] leading-[1.5] text-white/80 hover:text-white hover:underline"
                  >
                    {section.email}
                  </a>
                </div>
              </div>
              {i < contactSections.length - 1 && (
                <div className="h-px w-full bg-white/40" />
              )}
            </div>
          ))}
        </div>

        <div className="flex h-full w-[495px] shrink-0 items-center justify-center rounded-[26px] bg-black/15 p-10">
          <div className="space-y-10 text-center">
            <h3 className="text-[44px] font-bold leading-[1.1] tracking-[-1px] text-white">
              Headquarters
            </h3>
            <address className="space-y-0 text-[22px] not-italic leading-[1.6] text-white/80">
              <p>3565 Piedmont Rd NE</p>
              <p>Building 1, Suite 200</p>
              <p>Atlanta, GA 30305</p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
