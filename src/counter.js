import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handeleDecrement = this.handeleDecrement.bind(this);
    this.handeleIncrement = this.handeleIncrement.bind(this);
  }

  handeleDecrement() {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }
  handeleIncrement() {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }
  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handeleDecrement}>-</button>
        <span>
          {date.toDateString()} {this.state.count}
        </span>
        <button onClick={this.handeleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
