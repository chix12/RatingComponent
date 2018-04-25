import React from "react";

class Stars extends React.Component {
  render() {
    let array = [];
    for (let i = 0; i < 5; i++) {
      i < this.props.rating ? array.push("★") : array.push("☆");
    }
    return array.map((el, i) => (
      <span key={i} onClick={() => this.props.onClick(i + 1)}>
        {el}
      </span>
    ));
  }
}

export default Stars;
