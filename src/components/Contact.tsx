const contactSections = [
  {
    title: "Investing With Us",
    emailLocal: "InvestorRelations",
    emailDomain: "TheArdentCompanies.com",
  },
  {
    title: "Partnering With Us",
    emailLocal: "Info",
    emailDomain: "TheArdentCompanies.com",
  },
  {
    title: "Working For Us",
    emailLocal: "Careers",
    emailDomain: "TheArdentCompanies.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full overflow-x-hidden bg-ardent-blue py-30 max-lg:py-20"
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className="sr-only">
        Contact
      </h2>
      <div className="container-site flex min-w-0 items-stretch gap-16 max-lg:flex-col max-lg:gap-10">
        <div className="flex min-w-0 flex-1 flex-col justify-center border-y border-white/40 max-w-[520px] mx-auto max-lg:max-w-none">
          {contactSections.map((section, i) => (
            <div
              key={section.title}
              className={`min-w-0 ${
                i < contactSections.length - 1 ? "border-b border-white/40" : ""
              }`}
            >
              <div className="px-6 py-5 text-center max-lg:px-2 max-lg:py-4">
                <div className="space-y-1.5">
                  <h3 className="text-heading-2 font-bold tracking-[-1px] text-white">
                    {section.title}
                  </h3>
                  <a
                    href={`mailto:${section.emailLocal}@${section.emailDomain}`}
                    className="text-small text-white/80 hover:text-white hover:underline max-lg:text-[0.875rem]"
                  >
                    {section.emailLocal}
                    <wbr />@{section.emailDomain}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full max-w-[400px] shrink-0 items-center justify-center rounded-[20px] bg-black/15 p-10 max-lg:max-w-none max-lg:p-8">
          <div className="space-y-6 text-center">
            <h3 className="text-heading-1 font-bold leading-[1.1] tracking-[-1px] text-white">
              Headquarters
            </h3>
            <address className="text-body space-y-0 not-italic leading-[1.6] text-white/80">
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
