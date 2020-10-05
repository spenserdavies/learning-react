import React, { useEffect, useState } from 'react'
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Home(){
  const url = `https://5f7b813800bd740016909a22.mockapi.io/Products?page=1&limit=10`

  let products = useAxiosGet(url)
  let content = null

  if(products.error){
    content = <p>There was an error. Try again later.</p>
  }

  if(products.loading){
    content = <Loader />
  }

  if(products.data){
    content = 
    products.data.map((product, key) => 
      <div key={key}>
        <ProductCard product={product}/>
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Best Sellers</h1>
      {content}
    </div>
  )
}

export default Home