export type TeamDepartment =
  | "Team"
  | "Debt"
  | "Development"
  | "Investor Relations"
  | "Asset Management"
  | "Finance & Operations";

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  email?: string;
  image: string;
  /**
   * CSS object-position for card/modal crops.
   * Default "center 20%" suits most studio headshots (face slightly above center).
   * Override per person when a crop is too tight, low, or off-center, e.g.:
   * - "center top" — more headroom / face high in frame
   * - "center 35%" — face sits lower (full-torso shots)
   * - "center center" — already tightly face-cropped
   */
  imagePosition?: string;
  departments: TeamDepartment[];
  bio: string;
};

/** Default crop for Ardent headshots in fixed card frames */
export const DEFAULT_TEAM_IMAGE_POSITION = "center 20%";

/**
 * Multi-word role phrases — bind with NBSP so the browser won't orphan
 * "Chief" onto the line above "Executive Officer".
 */
const TITLE_KEEP_TOGETHER = [
  "Chief Executive Officer",
  "Chief Financial Officer",
  "Vice Chairman",
  "Self-Storage",
  "Real Estate",
  "Investor Relations",
  "Managing Director",
  "Executive Director",
  "Senior Associate",
  "Staff Accountant",
  "Executive Assistant",
] as const;

/** Bind known role phrases with non-breaking spaces. */
export function protectTitlePhrases(title: string): string {
  let out = title;
  for (const phrase of TITLE_KEEP_TOGETHER) {
    if (out.includes(phrase)) {
      out = out.replaceAll(phrase, phrase.replaceAll(" ", "\u00A0"));
    }
  }
  return out;
}

/**
 * Split compound titles at " & " so cards break as:
 *   Partner &
 *   Chief Executive Officer
 * instead of the mid-phrase wrap "Partner & Chief / Executive Officer".
 * Titles without " & " stay a single line.
 */
export function teamTitleLines(title: string): [string] | [string, string] {
  const sep = " & ";
  const idx = title.indexOf(sep);
  if (idx === -1) return [protectTitlePhrases(title)];
  return [
    protectTitlePhrases(`${title.slice(0, idx)} &`),
    protectTitlePhrases(title.slice(idx + sep.length)),
  ];
}

export const teamTabs: TeamDepartment[] = [
  "Team",
  "Debt",
  "Development",
  "Investor Relations",
  "Asset Management",
  "Finance & Operations",
];

/**
 * Headshots from client delivery; bios from Website Bios (7.1.26 / June 23)
 * and Employee Bios (6.30.26). Emails only when previously confirmed on site.
 */
export const teamMembers: TeamMember[] = [
  // —— Leadership (Team tab) ——
  {
    id: "matt-shulman",
    name: "Matt Shulman",
    title: "Partner & Chief Executive Officer",
    email: "mshulman@theardentcompanies.com",
    image: "/ardent/images/team/matt-shulman.jpg",
    departments: ["Team"],
    bio: "Matt is the Chief Executive Officer of The Ardent Companies and leads the firm’s investment committee, overseeing all investment decisions across Ardent’s strategies. Prior to founding Ardent, he served as a Managing Director at Rialto Capital, where he oversaw an equity origination platform and deployed capital into a diverse range of real estate and debt opportunities. Earlier at Rialto, he led a team focused on asset management, building out operations during the firm's early years. Before that, Matthew co-founded Fairway Capital Partners, a distressed debt investment firm that acquired real estate and loans secured by commercial and residential development assets. He began his career in real estate finance and has more than two decades of industry experience. Matthew holds a B.A. in Political Science from the University of Arizona and an M.A. in Real Estate Finance from New York University, where he also served as an adjunct professor.",
  },
  {
    id: "dror-bezalel",
    name: "Dror Bezalel",
    title: "Partner & Chief Financial Officer",
    email: "dbezalel@theardentcompanies.com",
    image: "/ardent/images/team/dror-bezalel.jpg",
    departments: ["Team"],
    bio: "Dror is a Partner and the Chief Financial Officer of The Ardent Companies, where he also serves on the firm’s investment committee. He brings over 25 years of experience in commercial real estate, including leadership roles in finance, operations, underwriting, and asset management. Before founding Ardent, he served as CFO/COO and a principal at Anthem Capital Partners, a Georgia-based distressed real estate investor. Dror previously served as COO of Fairway Capital Partners, a distressed debt real estate firm, and was a senior CMBS underwriter at Morgan Stanley. His early career included roles in commercial appraisal, leasing, and disposition. Dror earned a B.A. in Business Management in Israel and an M.S. in Real Estate Development and Finance from New York University.",
  },
  {
    id: "todd-terwilliger",
    name: "Todd Terwilliger",
    title: "Partner & Head of Residential Real Estate",
    email: "tterwilliger@theardentcompanies.com",
    image: "/ardent/images/team/todd-terwilliger.jpg",
    departments: ["Team"],
    bio: "Todd is a Partner at The Ardent Companies and Head of Residential Real Estate, where he oversees day-to-day operations and sits on the firm’s investment committee. He has extensive experience in acquisitions, development, and asset management, with a focus on residential investments. Prior to Ardent, he was a Managing Director at Rialto Capital, managing the Southeastern U.S. portfolio and leading underwriting for non-performing loan and real estate investments. Todd previously partnered with Fairway Capital Partners on acquiring distressed loans secured by real estate from commercial banks across the Southeast. Earlier in his career, he served as Vice President of Land Acquisition and Development at Pulte Homes, overseeing site selection, contract negotiation, and development strategy for multiple brands. He holds an M.A. in Business Administration from Georgia State University and a B.S. in Engineering Technology from the University of Dayton.",
  },
  {
    id: "gregg-goldenberg",
    name: "Gregg Goldenberg",
    title: "Vice Chairman & Partner",
    image: "/ardent/images/team/gregg-goldenberg.jpg",
    // Tight face-centered studio crop — keep face in the optical center of the card
    imagePosition: "center 28%",
    departments: ["Team"],
    bio: "Gregg is Vice Chairman of The Ardent Companies, where he focuses on residential and land development investments. He is a member of the Ardent Partnership. Gregg brings more than 25 years of experience in homebuilding, land development, and operational leadership. Before joining Ardent, he was President and CEO of Acadia Homes & Neighborhoods and earlier founded a residential development firm and held senior leadership roles at Morrison Homes. He holds a B.S. in Commerce from the University of Virginia and an M.B.A. with a concentration in Real Estate Finance from the University of North Carolina at Chapel Hill. Gregg serves on the boards of Spencer Health Solutions, Fastbreak AI, and The Forward Fund and is active with the Georgia Chapter of the Cystic Fibrosis Foundation.",
  },
  {
    id: "mike-degance",
    name: "Michael DeGance",
    title: "Partner & Head of Investor Relations",
    email: "mdegance@theardentcompanies.com",
    image: "/ardent/images/team/mike-degance.jpg",
    departments: ["Team", "Investor Relations"],
    bio: "Mike is a Partner at The Ardent Companies, where he leads investor relations, fund management, and capital raising initiatives. Before joining Ardent, he worked at Morgan Stanley Real Estate Advisors, overseeing financial and investor reporting for a $10 billion open-end core real estate fund. There, he managed a team of associates and contributed to fund operations and investor communications. Mike began his career in the assurance and advisory practice at PricewaterhouseCoopers. He is a CPA and holds B.B.A. degrees in Real Estate and Accounting from the University of Georgia’s Terry College of Business.",
  },
  {
    id: "scott-werbel",
    name: "Scott Werbel",
    title: "Partner & Head of Commercial Real Estate Acquisitions",
    email: "swerbel@theardentcompanies.com",
    image: "/ardent/images/team/scott-werbel.jpg",
    departments: ["Team", "Development"],
    bio: "Scott is a Partner at The Ardent Companies, where he focuses on real estate acquisitions and the origination of bridge loans. He brings over two decades of experience across retail, multifamily, and distressed real estate investments. Before joining Ardent in 2014, he was an Acquisitions Officer at RCG Ventures, a private retail REIT, where he managed acquisitions of shopping centers and non-performing loans collateralized by retail assets. Previously, he founded Impressa Group, a retail and multifamily acquisition firm with operations in Atlanta and Chicago. Earlier in his career, Scott served as Vice President of Acquisitions at Equity Investment Group, where he led a team that acquired 27 retail properties, and as Director of Sales at LNR Property Corporation, where he oversaw the restructuring, foreclosure, and sale of nearly $400 million in distressed assets. He holds a B.A. in Architecture from Virginia Tech and a M.S. in Real Estate from Georgia State University.",
  },
  {
    id: "thomas-olson",
    name: "Thomas Olson",
    title: "Partner & Head of Self-Storage Platform",
    email: "tolson@theardentcompanies.com",
    image: "/ardent/images/team/thomas-olson.jpg",
    departments: ["Team", "Development"],
    bio: "Thomas is Head of the Self-Storage Platform at The Ardent Companies, where he leads platform partnerships, strategy, and capital markets. He is a member of the Ardent Partnership and also leads Rho One Ventures, Ardent’s strategic division dedicated to executing multiple strategies within the storage industry. Thomas brings more than two decades of experience building businesses and executing real estate investments. Prior to Ardent, he was a Partner and CFO of Acadia Homes & Neighborhoods and has also held leadership roles at Hines, Resource Real Estate Partners, and Warren-Hanks. Thomas earned a Bachelor of Business Administration in Corporate Finance from the University of Wisconsin-Eau Claire. He currently serves on the board of Direct Residential and Children’s Healthcare of Atlanta’s Sports Network Advisory Board and is an active contributor to the Carter Samuel Martin Developmental Therapeutics Research Fund.",
  },

  // —— Debt ——
  {
    id: "rachel-callaghan",
    name: "Rachel Callaghan",
    title: "Director",
    image: "/ardent/images/team/rachel-callaghan.jpg",
    departments: ["Debt"],
    bio: "Rachel Callaghan is a Director and is responsible for originations, underwriting, and asset management for the debt platform. Rachel received a Bachelor of Science in Business Administration with a concentration in Finance from the Georgia Institute of Technology.",
  },
  {
    id: "michelle-fowler",
    name: "Michelle Fowler",
    title: "Managing Director",
    image: "/ardent/images/team/michelle-fowler.jpg",
    departments: ["Debt"],
    bio: "Michelle Fowler is a Managing Director on the debt platform at The Ardent Companies.",
  },
  {
    id: "grayson-fowler",
    name: "Grayson Fowler",
    title: "Associate",
    image: "/ardent/images/team/grayson-fowler.jpg",
    departments: ["Debt"],
    bio: "Grayson Fowler is an Associate on the debt platform at The Ardent Companies.",
  },
  {
    id: "peyton-kegel",
    name: "Peyton Kegel",
    title: "Executive Director",
    image: "/ardent/images/team/peyton-kegel.jpg",
    departments: ["Debt"],
    bio: "Peyton Kegel is an Executive Director on the debt platform at The Ardent Companies.",
  },
  {
    id: "matt-snyder",
    name: "Matt Snyder",
    title: "Managing Director",
    image: "/ardent/images/team/matt-snyder.jpg",
    departments: ["Debt"],
    bio: "Matt Snyder is a Managing Director on the debt platform at The Ardent Companies.",
  },
  {
    id: "greg-sullivan",
    name: "Greg Sullivan",
    title: "Managing Director",
    image: "/ardent/images/team/greg-sullivan.jpg",
    departments: ["Debt"],
    bio: "Greg Sullivan is a Managing Director on the debt platform at The Ardent Companies.",
  },
  {
    id: "jennifer-wimmer",
    name: "Jennifer Wimmer",
    title: "Managing Director",
    image: "/ardent/images/team/jennifer-wimmer.jpg",
    departments: ["Debt"],
    bio: "Jennifer Wimmer is a Managing Director on the debt platform at The Ardent Companies.",
  },
  {
    id: "jay-yuan",
    name: "Jay Yuan",
    title: "Director",
    image: "/ardent/images/team/jay-yuan.jpg",
    departments: ["Debt"],
    bio: "Jay Yuan is a Director at The Ardent Companies and is responsible for debt underwriting, origination, asset management, market research, and data analysis for fund management. Jay received a Bachelor of Business Administration, concentrating in Finance and Real Estate, with a double major in Econometrics from Emory University.",
  },

  // —— Development ——
  {
    id: "ricardo-de-rojas",
    name: "Ricardo De Rojas",
    title: "Managing Director",
    image: "/ardent/images/team/ricardo-de-rojas.jpg",
    departments: ["Development"],
    bio: "Ricardo De Rojas is a Managing Director on the development team at The Ardent Companies.",
  },
  {
    id: "jay-douglas",
    name: "Jay Douglas",
    title: "Managing Director",
    image: "/ardent/images/team/jay-douglas.jpg",
    departments: ["Development"],
    bio: "Jay Douglas is a Managing Director on the development team at The Ardent Companies.",
  },
  {
    id: "mike-guynn",
    name: "Mike Guynn",
    title: "Managing Director",
    image: "/ardent/images/team/mike-guynn.jpg",
    departments: ["Development"],
    bio: "Mike Guynn is a Managing Director on the development team at The Ardent Companies.",
  },
  {
    id: "sam-levere",
    name: "Sam Levere",
    title: "Senior Associate",
    image: "/ardent/images/team/sam-levere.jpg",
    departments: ["Development"],
    bio: "Sam Levere is a Senior Associate on the development team at The Ardent Companies.",
  },
  {
    id: "ross-mehlman",
    name: "Ross Mehlman",
    title: "Managing Director",
    image: "/ardent/images/team/ross-mehlman.jpg",
    departments: ["Development"],
    bio: "Ross Mehlman is a Managing Director on the development team at The Ardent Companies.",
  },
  {
    id: "ignacio-nunez",
    name: "Ignacio Nunez",
    title: "Director",
    image: "/ardent/images/team/ignacio-nunez.jpg",
    departments: ["Development"],
    bio: "Ignacio Nunez is a Director on the development team at The Ardent Companies.",
  },
  {
    id: "davis-vainer",
    name: "Davis Vainer",
    title: "Senior Associate",
    image: "/ardent/images/team/davis-vainer.jpg",
    departments: ["Development"],
    bio: "Davis Vainer is a Senior Associate who is responsible for the sourcing and acquisition of ground up developments and retail repositioning opportunities. Davis received a Master of Real Estate Development from The University of Arizona and his Bachelor’s Degree from The University of Alabama.",
  },
  {
    id: "jackson-mclarty",
    name: "Jackson McLarty",
    title: "Analyst",
    image: "/ardent/images/team/jackson-mclarty.jpg",
    departments: ["Development"],
    bio: "Jackson McLarty is an Analyst on the development team at The Ardent Companies.",
  },

  // —— Investor Relations ——
  {
    id: "jennifer-childers",
    name: "Jennifer Childers",
    title: "Senior Associate",
    image: "/ardent/images/team/jennifer-childers.jpg",
    departments: ["Investor Relations"],
    bio: "Jennifer Childers is a Senior Associate on the Investor Relations team at The Ardent Companies.",
  },
  {
    id: "tim-dunn",
    name: "Tim Dunn",
    title: "Director",
    image: "/ardent/images/team/tim-dunn.jpg",
    departments: ["Investor Relations"],
    bio: "Tim Dunn is a Director on the Investor Relations team at The Ardent Companies.",
  },
  {
    id: "emma-grillo",
    name: "Emma Grillo",
    title: "Executive Director",
    image: "/ardent/images/team/emma-grillo.jpg",
    departments: ["Investor Relations"],
    bio: "Emma Grillo is an Executive Director on the Investor Relations team at The Ardent Companies.",
  },
  {
    id: "monica-ortego",
    name: "Monica Ortego",
    title: "Director",
    image: "/ardent/images/team/monica-ortego.jpg",
    departments: ["Investor Relations"],
    bio: "Monica Ortego is a Director on the Investor Relations team at The Ardent Companies.",
  },
  {
    id: "izzy-russell",
    name: "Izzy Russell",
    title: "Associate",
    image: "/ardent/images/team/izzy-russell.jpg",
    departments: ["Investor Relations"],
    bio: "Izzy Russell is an Associate on the Investor Relations team and is responsible for supporting investor communications, reporting, and fundraising initiatives. Izzy received a BS in Economics with a concentration in Mathematics from Oregon State University.",
  },

  // —— Finance & Operations ——
  {
    id: "suzie-cooper",
    name: "Suzie Cooper",
    title: "Managing Director",
    image: "/ardent/images/team/suzie-cooper.jpg",
    departments: ["Finance & Operations"],
    bio: "Suzie Cooper is a Managing Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "shawnia-da-cruz",
    name: "Shawnia Silva Da Cruz",
    title: "Executive Director",
    image: "/ardent/images/team/shawnia-da-cruz.jpg",
    departments: ["Finance & Operations"],
    bio: "Shawnia Silva Da Cruz is an Executive Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "hugo-frewin",
    name: "Hugo Frewin",
    title: "Executive Director",
    image: "/ardent/images/team/hugo-frewin.jpg",
    departments: ["Finance & Operations"],
    bio: "Hugo Frewin is an Executive Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "hattie-fitzpatrick",
    name: "Hattie Fitzpatrick",
    title: "Director",
    image: "/ardent/images/team/hattie-fitzpatrick.jpg",
    departments: ["Finance & Operations"],
    bio: "Hattie Fitzpatrick is a Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "kristin-canine",
    name: "Kristin Canine",
    title: "Executive Assistant",
    image: "/ardent/images/team/kristin-canine.jpg",
    departments: ["Finance & Operations"],
    bio: "Kristin Canine is an Executive Assistant in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "david-lorino",
    name: "David Lorino",
    title: "Director",
    image: "/ardent/images/team/david-lorino.jpg",
    departments: ["Finance & Operations"],
    bio: "David Lorino is a Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "gerry-moschopoulos",
    name: "Gerry Moschopoulos",
    title: "Director",
    image: "/ardent/images/team/gerry-moschopoulos.jpg",
    departments: ["Finance & Operations"],
    bio: "Gerry Moschopoulos is a Director in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "michele-simmons",
    name: "Michele Simmons",
    title: "Senior Associate",
    image: "/ardent/images/team/michele-simmons.jpg",
    departments: ["Finance & Operations"],
    bio: "Michele Simmons is a Senior Associate in Finance & Operations at The Ardent Companies.",
  },
  {
    id: "caleb-knight",
    name: "Caleb Knight",
    title: "Staff Accountant",
    image: "/ardent/images/team/caleb-knight.jpg",
    departments: ["Finance & Operations"],
    bio: "Caleb Knight is a Senior Accountant who works on Self Storage, Land, Development, and other CRE deals. Caleb graduated from the University of Mississippi with both a Bachelor’s and Master’s in Accountancy. He is currently obtaining his CPA certification.",
  },
  {
    id: "elexis-ramsey",
    name: "Elexis Ramsey",
    title: "Staff Accountant",
    image: "/ardent/images/team/elexis-ramsey.jpg",
    departments: ["Finance & Operations"],
    bio: "Elexis Ramsey is a Staff Accountant in Finance & Operations at The Ardent Companies.",
  },
];

export function membersForTab(tab: TeamDepartment): TeamMember[] {
  return teamMembers.filter((m) => m.departments.includes(tab));
}
