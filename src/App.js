import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import User from './components/User';
// import Loading from './components/Loading';
// import axios from 'axios';

function App() {

  // const apiQuotes = {};

  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  // const [quote, setQuote] = useState({text: "Everything is nothing, with a twist.", author: "Kurt Vonnegut"});

  //   const getUserData = async () => {
  //     //setIsLoading(true);
  //     const apiURL = "https://reqres.in/api/users";
    
  //     const response = await axios.get(apiURL);
  //     setApiData(response.data);
  //     console.log(apiData);
  //     setIsLoading(false);
      
  // }

  function getUserData() {
    
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(json => {
      // console.log(json.data);
      setApiData(json.data);
    })
  }

useEffect( () => {
    getUserData();
}, []);
  
const users = apiData.map(user=> {
  // console.log(user);
  return <User key={user.id} {...user} />
}); 

// function newQuote() {
//     setIsLoading(true);
//     //  Pick a random quote from apiQuotes array
//     setQuote(apiQuotes[Math.floor(Math.random() * apiQuotes.length)]);
    
//     //Check if author feild is null, if it is replace it with "Unknown"
//     if(!quote.author) {
//         quote.author = "Unknown";
//     }
    
//     setIsLoading(false);
    
// }

// function tweetQuote() {
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;

//     window.open(twitterUrl, "_blank");
// }


  return (
    <>
    <ul className="list-container">
      {users}
    </ul>
    </>
  )
}

export default App;