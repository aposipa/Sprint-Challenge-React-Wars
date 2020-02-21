import React, { useState, useEffect } from 'react';
import axios from "axios";

//imports
import StarWars from "./components/StarWarsPeople";
import './App.css';
import { Jumbotron, Button} from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(response => {
        console.log("this is api call log:", response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("Oops error here:", error);
      })
  }, [])

  return (
    
    <div className="App">
      <Jumbotron>
    <h1 className="display-3">Hello, A Galaxy Far Far Away!</h1>
        <p className="lead">This is a list of some of the most important people in the Star Wars Universe.</p>
        <hr className="my-2" />
        <p>It uses an API for characters from the Episode IV A New Hope.</p>
       
        </Jumbotron>
      {data.map(characters => (
        <StarWars data = {characters}/>
      ))}
    </div>
  );
}

export default App;
