import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import { connect } from "react-redux";
import { addData } from "../redux/actions";

class App extends Component {
  componentDidMount() {
    setInterval(
      function() {
        //сюда вставить апишку
        this.props.addData([
          {
            b: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1
            },
            s: {
              sum: Math.random(123).toFixed(5),
              count: Math.random(123).toFixed(5),
              price: Math.floor(Math.random() * 6000) + 1
            }
          }
        ]);
      }.bind(this),
      1000
    );
  }
  render() {
    return (
      <div className="App">
        <Table type={"b"}></Table>
        <Table type={"s"}></Table>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addData
};

export default connect(null, mapDispatchToProps)(App);
