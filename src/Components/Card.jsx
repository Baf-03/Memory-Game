import React, { useState } from 'react';
import './Cards.css'; // We'll create this file next

const Card = (props) => {
  let  {value,visibility,isflip,bg_img} =props
  console.log(isflip,value)
  console.log(visibility)
  const [isFlipped, setIsFlipped] = useState(false);

 


  return (
    <div className={`${visibility=="false"?"invisible":"visible"} transition ease-out hover:scale-110`} >
      <div className={`card ${isflip=="true" ? 'flipped' : ''} `}>
        <div className="front frontcolor"><img src='https://uploads.codesandbox.io/uploads/user/946e5122-b748-4188-a910-b562feec37f3/fAe0-pokeball-1594373_640.png' className='w-[100%] h-[100%]'/> </div>
        <div className="back"><img src={bg_img} className='w-[100%] h-[100%]'/></div>
      </div>
     </div>
  );
};

export default Card;
