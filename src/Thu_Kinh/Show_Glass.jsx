import React, { Component } from "react";

export default class Show_Glass extends Component {
  render() {
    return (
      <div className={this.props.display}>
        <div className="absolute top-32 left-1/3 z-10 ml-20">
          <div className="w-40 bg-transparent">
            <img src={this.props.imgGlass} />
          </div>
        </div>
      </div>
    );
  }
}
