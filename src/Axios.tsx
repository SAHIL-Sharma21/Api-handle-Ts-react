// 2nd way we are going to learn here using axios

import axios from "axios";
import React, { useEffect, useState } from "react";

const MyAxios: React.FC = () => {

//making interface
interface PoductList {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    rating: {
        count: number,
        rate: number
    }
}

    //making state
    const [product, setProduct] = useState<PoductList[]>([]);

    useEffect(() => {
        //naking axios get request below
        axios.get('https://fakestoreapi.com/products')
        .then((response) => setProduct(response.data))
        .catch((err) => console.log(err));
    }, []);




    return (
        <>
            <div>
                <h1>Fetching data with axios library</h1>
                {product && product.map((val) => (
                    <div key={val.id}>
                        <img src={val.image} alt={val.description} />
                        <h1>title: {val.title}</h1>
                        <h2>price: {val.price}</h2>
                        <p>desc: {val.description}</p>
                        <p>Rating: {val.rating.rate} count: {val.rating.count}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MyAxios;