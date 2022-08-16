import React, { Component } from "react";

export default class Show_Detail extends Component {
  render() {
    return (
      <div className={this.props.display}>
        <div className="p-5 absolute bg-slate-900 w-1/3 top-20 right-20 text-left">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {this.props.currentGlass.name}
          </h5>
          <span className="text-red-500">{this.props.currentGlass.price}$</span>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {this.props.currentGlass.desc}
          </p>
        </div>
      </div>
    );
  }
}
