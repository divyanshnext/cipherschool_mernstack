// import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {

  name = "CipherSchool";
  author = "divyansh"

  render() {
    return (
      <>
      <div>
        <h1>This is H1 JSX {this.name} </h1>
      </div>
      <div>
        <p>this is paragraph in JSX by {this.author}</p>
      </div>
      </>
  )
  }
}

export default App;


// notes for jsx

// taking about ui related information
// in <h1> style - we put two bracket first bracket is to tell that we gonna write js code in it 
//in jsx only one parent <div> should be there and inside that we have to write all div