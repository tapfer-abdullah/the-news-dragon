import React from 'react';
import imgQ1 from '../../../assets/qZone1.png';
import imgQ2 from '../../../assets/qZone2.png';
import imgQ3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-light text-center py-4 my-4'>
            <img src={imgQ1} alt="" />
            <img src={imgQ2} alt="" />
            <img src={imgQ3} alt="" />
        </div>
    );
};

export default QZone;