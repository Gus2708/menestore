import React from 'react'
import { StoreCard } from './StoreCard'

export const Stores = () => {
  return (
    <div className='storesPage'>
      <h2>Tiendas</h2>
      <div className="search">
          <input type="text" placeholder='Buscar tienda:' />
          <button> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
      </div>
      <div className="container">
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
        <StoreCard/>
      </div>
    </div>  
  )
}
