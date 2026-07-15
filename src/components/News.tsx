import Image from "next/image";

const articles = [
  {
    image: "/images/news-1.jpg",
    title: "The Ardent Companies",
    followers: "3,833 followers",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt nunc fringilla mi nullam convallis quis ut. Sed nec phasellus nibh ac dictum id aliquam integer nisl.",
  },
  {
    image: "/images/news-2.jpg",
    title: "The Ardent Companies",
    followers: "3,833 followers",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt nunc fringilla mi nullam convallis quis ut. Sed nec phasellus nibh ac dictum id aliquam integer nisl.",
  },
  {
    image: "/images/news-3.jpg",
    title: "The Ardent Companies",
    followers: "3,833 followers",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur. Tincidunt nunc fringilla mi nullam convallis quis ut. Sed nec phasellus nibh ac dictum id aliquam integer nisl.",
  },
];

export default function News() {
  return (
    <section id="news" className="w-full px-[34px] pb-[34px]">
      <div className="flex flex-col items-center gap-[60px] rounded-[20px] bg-ardent-light px-20 py-[120px]">
        <h2 className="max-w-[830px] text-center text-[48px] font-bold leading-[1.05] text-ardent-blue">
          News & Announcements
        </h2>

        <div className="flex w-full gap-[30px]">
          {articles.map((article) => (
            <article
              key={article.image}
              className="flex flex-1 flex-col overflow-hidden"
            >
              <div className="relative h-[192px] overflow-hidden rounded-t-[26px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 rounded-b-[26px] bg-white p-[30px]">
                <div className="space-y-3">
                  <h3 className="text-[22px] font-bold leading-6 text-ardent-blue">
                    {article.title}
                  </h3>
                  <p className="text-[16px] leading-[21px] text-charcoal">
                    {article.followers}
                  </p>
                </div>
                <p className="text-[14px] leading-[1.7] text-charcoal/80">
                  {article.excerpt}
                </p>
                <a
                  href="#"
                  className="text-[16px] font-bold leading-[1.7] text-ardent-blue hover:underline"
                >
                  more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
