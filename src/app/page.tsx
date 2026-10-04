import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";
interface othersNew {
  curationId :string
  title : string
  articles :{
    id : string
    title : string
    description : string
    imageUrl : string
    imageAlt : string
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sectionData = data.data
  const mainNews = sectionData[0].articles
  const otherNewSections:othersNew[] = sectionData.slice(1)
  console.log(otherNewSections,'this is other section console by home pages')
  return (
  <div>
    <Marquee />
   <div className="grid grid-cols-3 max-w-7xl mx-auto  mt-4 ">

    {/* new section */}
    <div className="col-span-2   ">
   <MainNews news={mainNews} />

   {/* otherNews map here and showing data  */}
   <div className="grid gap-5 mt-4">

    {
    otherNewSections.map(otherSecNews=> <div className=""  key={otherSecNews.curationId}>
      <h1 className="font-semibold border-b-2 border-red-500">{otherSecNews.title}</h1>
   <div className="grid grid-cols-3 gap-3 mt-3">

    {
    otherSecNews.articles.map(articalData => <NewsCard key={articalData.id}  articalData={articalData}/>)
   }
   </div>


    </div>
    )
   }


   </div>
    </div>
    {/* most read section  */}
    <div className="col-span-1 p-10 bg-violet-300">

      

    </div>
   </div>
  
  </div>
  );
}
