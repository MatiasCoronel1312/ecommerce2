import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import Data  from "../Data";
import  axios from "axios";
import {analytics} from '../Utils/firebaseConfig'

export const ItemListContainer = ({greeting}) => {
  const [ datopoke, setDatopoke] = useState([]);
  const apiAxios = axios.create();
 
 

apiAxios.get('ecommerceprueba-a3bc9.firebaseapp.com')
  .then(function (response) {
    
     setDatopoke(response.data.results);
     
    return datopoke
    
    
  })
  .catch(function (error) {
    setDatopoke(Data);
    //console.log(error);
  })
  
  return (
    <div className=' p-3'>
      <h1 className='text-danger'>{greeting}</h1>
      console.log(datopoke)
      <div className='d-flex justity-content-between flex-wrap m-1 ' >
        {          
          datopoke.map(item =>
          <Item
              key={item.id}
              name={item.name}
              
              //description={item.description}
              priece={item.priece}
              img={item.url}
              stock={item.stock}
              
          />
          )
        }      
      </div>
    </div>
  )
}
