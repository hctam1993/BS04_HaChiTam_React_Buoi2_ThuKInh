import React, { Component } from "react";

export default class Show_Model extends Component {
  render() {
    return (
      <div className="relative top-0 left-1/3">
        <div className="w-80 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src={require("../Thu_Kinh/glassesImage/model.jpg")}
          />
        </div>
      </div>
    );
  }
}
