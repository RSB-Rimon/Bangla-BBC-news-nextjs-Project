import Link from "next/link";
import React from "react";
interface INavsType {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlink = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navdata: INavsType[] = data.data;
  const filterNavs = navdata.filter((n) => n.scrapable);
  console.log(navdata);
  return (
    <div className="container mx-auto flex gap-6 justify-center">
      <Link href={"/"}>হোম</Link>
      {filterNavs.map((n, i) => (
        <Link key={i} href={n.slug}>    
          {n.title}
        </Link>
      ))}   
    </div>
  );
};

export default Navlink;
