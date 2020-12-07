import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: this.props.initItems,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.todoItems);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <button onClick={this.handleClick}>Click-me</button>
      </React.Fragment>
    );
  }
}

export default App;
