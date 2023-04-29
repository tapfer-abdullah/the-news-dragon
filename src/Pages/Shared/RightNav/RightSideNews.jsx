import React from 'react';
import bg1 from '../../../assets/bg1.png';

const RightSideNews = () => {
    return (
        <div>
            <img src={bg1} alt="" className='img-fluid'/>
            <div className='text-white p-4 position-relative bottom-10'>
                <h4>Create an Amazing Newspaper</h4>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            </div>
        </div>
    );
};

export default RightSideNews;