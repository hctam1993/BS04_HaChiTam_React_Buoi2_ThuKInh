import React, { Component } from "react";

export default class Show_ListGlass extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.handleChangeGlass(this.props.dataId);
          }}
          className="rounded border-2 border-solid border-red-500"
        >
          <img src={this.props.dataImg} />
        </button>
      </div>
    );
  }
}
