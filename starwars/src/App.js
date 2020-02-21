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

// ReadMe questions:

// What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

        // -- React JS is a JS library used to help build UI.  The main problems it tries to solve is the development of large applications that have temporal data changes.  It is also declarative and component based making it easier to use

//  What does it mean to think in react?
  
        // --It means how you think about transistioning your UI.  React frees you up from that by being declarative and it re-renders itself.

//  Describe state.

        // --An object that determines how a component renders and behaves.

//  Describe props.

      // --A kind of global variable or object.

//  What are side effects, and how do you sync effects in a React component to state or prop changes?

      // --Side effects are anything that affects something outside the function that is being executed.  You sync effects with useState and useEffect.