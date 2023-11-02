import React from 'react';
import { FaCartShopping} from 'react-icons/fa6';



export const CartWidget = () => {
  return (
    <>
        <div>
           <FaCartShopping className='m-2 w-20' />
           <div>{4}</div>
        </div>
        
   </>
  )
}
