import MarqueeText from "react-marquee-text";
import "react-marquee-text";

interface HeadLins {
  id: string;
  title: string;
}

const fallbackHeadlines: HeadLins[] = [
  { id: "fallback-1", title: "সর্বশেষ সংবাদ আপডেট আসছে..." },
];

const Marquee = async () => {
  let headleLines: HeadLins[] = fallbackHeadlines;

  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch headlines");
    }

    const data = await res.json();
    if (Array.isArray(data?.data)) {
      headleLines = data.data;
    }
  } catch (error) {
    console.error("Headline fetch failed:", error);
  }

  return (
    <div className="bg-red-600 text-gray-900 p-2 font-semibold">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-900 text-white py-1 px-3 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={10}>
          {headleLines.map((headline) => (
            <span key={headline.id}>
              <span>{headline.title}</span>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
