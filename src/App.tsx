import { useEffect, useState } from 'react';
import './App.css'
import MyAxios from './Axios';

const App = () => {


//making interface so that Ts not give error we have to define interface for type cating
interface ProductItem {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}



  // showing data in our frontend
  const [products, setProducts] = useState<ProductItem[]>([]);

  //2 ways to call api >>> 1st is fetch and other is using library called axios
  //1st using fetch 
  // when the componets load for the first time then useEffect will call the api for the very first time.
  useEffect(() => {
    //making api call
    fetch('https://fakestoreapi.com/products?limit=10')
    // .then((response) => console.log(response))
     //we are getting readable stream from the backend so we need to parse it.
     .then((response) => response)// returing response from here are going to parse it
     .then((responseData) => responseData.json()) // converted above response to json and parsed it into json and we can console log the data.
     .then((data) => setProducts(data as ProductItem[])) // setting to setProducts data as ProductItem[] ka array. data ko typecast kr dia woh productItem ka array ka
     .catch((error) => console.log(error));

  }, []);

  return (
    <>
      <div>
        <h1 className='text-orange-600  text-4xl font-poppins font-semibold mb-4'>Api Handle in TS + react </h1>
          {products && products.map((product) => (
            <div key={product.id}>
              <img src={product.image}  alt = {product.category}/>
              <h2 className='font-roboto text-xl text-amber-600 font-medium'>title: {product.title}</h2>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <p>Rating: count: {product.rating.count}  rate: {product.rating.rate}</p>
            </div>
          ))}

          <h2>using Axios</h2>
          <MyAxios />
      </div>
    </>
  )
}

export default App;