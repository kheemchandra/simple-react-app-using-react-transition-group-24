import React, { Component } from "react"; 

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    modalIsShown: false
  } 
}
  modalOpen = () => { 
    this.setState({modalIsShown: true})
  }

  modalClosed = () => { 
    this.setState({modalIsShown: false})
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1> 
        <Modal show={this.state.modalIsShown} closed={this.modalClosed}/> 
         
        { this.state.modalIsShown ?  <Backdrop /> : null}        
        <button onClick={this.modalOpen} className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
