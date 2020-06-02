import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    imgURL:
      "https://images.unsplash.com/photo-1580411196492-027c480950c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (count) => count.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const count = this.state.counters.map((count) => {
      count.value = 0;
      return count;
    });
    this.setState({ count });
  };

  render() {
    return (
      <div>
        <img src={this.state.imgURL} alt="" />
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset Value
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
