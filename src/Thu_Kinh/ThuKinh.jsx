import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";
import backround from "./glassesImage/background.jpg";
import Show_Detail from "./Show_Detail";
import Show_Glass from "./Show_Glass";
import Show_ListGlass from "./Show_ListGlass";
import Show_Model from "./Show_Model";

export default class ThuKinh extends Component {
  state = {
    arrGlass: dataGlasses,
    imgGlass: "",
    display: "hidden",
    currentGlass: "",
  };
  handleChangeGlass = (idGlass) => {
    let index = this.state.arrGlass.findIndex((item) => {
      return item.id == idGlass;
    });
    console.log("index: ", index);
    index !== -1 &&
      this.setState({
        currentGlass: this.state.arrGlass[index],
        imgGlass: this.state.arrGlass[index].url,
        display: "block",
      });
  };

  render() {
    return (
      <div className="container relative">
        <div
          className="bg-cover bg-no-repeat bg-center opacity-50 fixed top-0 left-0"
          style={{
            backgroundImage: `url(${backround})`,
            height: `100vh`,
            width: `100%`,
          }}
        ></div>
        <header className="h-10 bg-black text-white opacity-50 leading-10">
          TRY GLASS APP ONLINE
        </header>
        {/* card */}
        <Show_Model />
        <div className="relative grid grid-cols-5 w-3/5 bottom-0 left-1/2 -translate-x-1/2 my-10 gap-2">
          {this.state.arrGlass.map((item, index) => {
            return (
              <Show_ListGlass
                dataImg={item.url}
                key={item.id + index.toString()}
                dataId={item.id}
                handleChangeGlass={this.handleChangeGlass}
              />
            );
          })}
        </div>
        <Show_Glass
          imgGlass={this.state.imgGlass}
          display={this.state.display}
        />
        <Show_Detail
          currentGlass={this.state.currentGlass}
          display={this.state.display}
        />
      </div>
    );
  }
}
