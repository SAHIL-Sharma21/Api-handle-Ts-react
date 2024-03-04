import { useEffect } from 'react';
import './App.css'

const App = () => {

  //2 ways to call api >>> 1st is fetch and other is using library called axios

  //1st using fetch 
  // when the componets load for the first time then useEffect will call the api for the very first time.
  useEffect(() => {
    //making api call
    fetch('https://fakestoreapi.com/products')
    // .then((response) => console.log(response))
     //we are getting readable stream from the backend so we need to parse it.
     .then((response) => response)// returing response from here are going to parse it
     .then((responseData) => responseData.json()) // converted above response to json and parsed it into json and we can console log the data.
     .then((data) => console.log(data)) // logging the whole data 
     .catch((error) => console.log(error));

  }, []);

  return (
    <>
      <div>
        <h1>Api Handle in TS + react </h1>
      </div>
    </>
  )
}

export default App;