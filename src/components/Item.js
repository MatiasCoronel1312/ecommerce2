import React, { useState } from 'react'

export const Item = (props) => {
    const [count, setCount] = useState(0);
  
  

    function handleClickSuma() {
        setCount(count+1)    
    } 
    function handleClickResta() { 
        if(count>0){
        setCount(count-1);  
        }   
    } 

  return (
    <div className='card m-1 p-2'>
        <div>{props.name}</div>
        <p>{props.description}</p>
        <div>Precio: ${props.priece}</div>
        <img src={props.img} alt={props.img}/>
        <div>Stock:{props.stock}</div>
        <div className='bg-light card m-5 p-5 '>
        
        <div className='d-flex'>
          <button className='btn p-3' onClick={handleClickSuma}>+</button>
          <div className='h2 p-3'>{count}</div>
          <button className='btn p-3' onClick={handleClickResta}>-</button>
          </div>
          <button className='btn btn-outline-success m-3' >Add to cart</button>
        </div>
    </div>
  )
}
