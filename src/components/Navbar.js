import React from 'react'
import { CartWidget } from './CartWidget'

export const Navbar = () => {
  return (
    <div className='navbar navbar-light bg-secondary p-3'>
        <div className="container-fluid">
            <a className="h1 p-2 text-danger" href='/'>Ecommerce</a>
            <ul className='navbar navbar-light '>
                <li className='navbar h5 p-3 text-danger '>Categoria 1</li>
                <li className='navbar h5 p-3 text-danger '>Categoria 2</li>
                <li className='navbar h5 p-3 text-danger '>Categoria 3</li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <CartWidget/>
        </div>
    </div>
 )
}
