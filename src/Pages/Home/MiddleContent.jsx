import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleHomeNews from './Home/SingleHomeNews';

const MiddleContent = () => {
    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            {
                news.length == 0 ? "No news available" :
                news.map(n => <SingleHomeNews
                    key={n._id}
                    n = {n}
                ></SingleHomeNews>)
            }
        </div>
    );
};

export default MiddleContent;