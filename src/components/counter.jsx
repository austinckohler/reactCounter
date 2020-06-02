import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl:
  //   //   "https://images.unsplash.com/photo-1580411196492-027c480950c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
  //   // tags: ["tag1", "tag2", "tag3"],
  // };

  //   styles = {
  //     fontSize: 15,
  //     fontWeight: "bold",
  //     maxWidth: 1024,
  //     margin: "auto",
  //   };

  // formally to have access to the keyword THIS you used to have to create a constructor function to bind. it would look like this.

  //   constructor() {
  //     //   suoer is the base constructor
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    // this classes variable uses a ternary operater to determine when to change the value from yellow to blue. right clicked and turned it into a method which was able to be placed insice the span.

    return (
      <div>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        && is evaulating the first part. if this is true then it will continue and print the string. lets say the first part is false, it wouldnt render the message. 
        {this.renderTags()} */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span className={this.getBageClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul> */}
      </div> //jsx expression
    );
  }

  getBageClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  //   renderTags() { THIS IS HOW WE WOULD USE IF/ELSE STATEMENTS IN REACT SINCE THEY ARE NOT PART OF FRAMEWORK. we create a new method and use javascript inside of it.

  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag} </li>
  //         ))}
  //       </ul>
  //     );
  //   }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero:" : value;
  }
}

export default Counter;
