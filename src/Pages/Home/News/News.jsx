import React from 'react';
import { Link } from 'react-router-dom';

const News = ({category}) => {
    const categoryClicked = (id) =>{
        console.log(id)
    }

    return (
        <div>
            <Link to= {`/category/${category.id}`}>
            <button 
                onClick={() => categoryClicked(category.id)} className='btn' style={{color: "#9F9F9F"}}>{category.name}
            </button>
            </Link>
        </div>
    );
};

export default News;