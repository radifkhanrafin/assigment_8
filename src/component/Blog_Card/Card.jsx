import React from 'react';

const Card = (props) => {
    console.log(props.dt)
    return (
        <div className='border border-red-500 mx-20'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ratione.</p>
            <div className=' w-2/5 m-4'>
                <img className=' h-1/5' src={props.dt.banner} alt="" />
            </div>
            <div>
                <img className='w-20 m-4' src={props.dt.author_profile} alt="" />
            </div>
        </div>
    );
};

export default Card;