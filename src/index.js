import React from "react";
import ReactDOM from "react-dom";
import Stars from "./Stars";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
    this.selectStarts = this.selectStarts.bind(this);
  }

  selectStarts(number) {
    this.setState({ rating: number });
  }

  render() {
    return <Stars rating={this.state.rating} onClick={this.selectStarts} />;
  }
}

ReactDOM.render(<Rating />, document.getElementById("root"));
