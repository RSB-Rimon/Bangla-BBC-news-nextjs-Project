import Image from "next/image";
interface News {
  title : string,
  description: string
  id : string
  category : string
  imageUrl : string
   
}
const MainNews = ({ news }:{news : News[]}) => {
 const [firstNews, ...otherNews] = news
 console.log(firstNews,'fristnews')

  return (
   <div className="flex gap-5">
  {/* Main News */}
  <div className="card bg-base-100 w-96 overflow-hidden border border-base-300 shadow-md transition-all duration-300 hover:shadow-xl">
    <figure className="relative overflow-hidden">
      <Image
        src={firstNews.imageUrl}
        alt={firstNews.title}
        height={600}
        width={600}
        className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </figure>

    <div className="card-body gap-2">
      <p className="text-sm font-bold uppercase tracking-wide text-red-500">
        {firstNews.category}
      </p>

      <h2 className="card-title text-xl leading-tight font-bold hover:text-red-500 transition-colors">
        {firstNews.title}
      </h2>

      <p className="line-clamp-3 text-sm leading-6 text-gray-600">
        {firstNews.description}
      </p>

      <div className="mt-2">
        <button className="text-sm font-semibold text-red-500 hover:text-red-700 transition-colors">
          Read More →
        </button>
      </div>
    </div>
  </div>

  {/* Other News */}
  <div className="grid flex-1 gap-3">
    {otherNews.slice(0, 4).map((other) => (
      <div
        className="
          card bg-base-100
          border border-base-300
          p-4
          shadow-sm
          transition-all duration-300
          hover:-translate-y-0.5
          hover:border-red-300
          hover:shadow-md
          cursor-pointer
        "
        key={other.id}
      >
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-500">
          {other.category}
        </p>

        <h3 className="text-base font-bold leading-6 hover:text-red-500 transition-colors">
          {other.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            Latest News
          </span>

          <span className="text-sm font-semibold text-red-500">
            →
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default MainNews;
