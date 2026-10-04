import React from 'react';

const MostReadPage =async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json()
    console.log(data,'mostReadPage')
    return (
        <div>
            
        </div>
    );
};

export default MostReadPage;