import React, { useState } from "react";
import "./app.css";

function App() {
  let numsArr = [];
  let firstNumbers = "";
  let secondNumbers = "";
  let operands;
  let result;

  function handleClick(val) {
    if (
      (val == 1 ||
        val == 2 ||
        val == 3 ||
        val == 4 ||
        val == 5 ||
        val == 6 ||
        val == 7 ||
        val == 8 ||
        val == 9 ||
        val == 0 ||
        val === ".") &&
      numsArr.length === 0
    ) {
      numsArr.push(val);
      firstNumbers += val;
      numsArr.pop();
    }

    if (
      (val == 1 ||
        val == 2 ||
        val == 3 ||
        val == 4 ||
        val == 5 ||
        val == 6 ||
        val == 7 ||
        val == 8 ||
        val == 9 ||
        val == 0 ||
        val === ".") &&
      numsArr.length !== 0
    ) {
      numsArr.push(val);
      secondNumbers += val;
      numsArr.pop();
    }

    if (val == "+" || val == "-" || val == "x" || val == "/") {
      operands = val;
      numsArr.push(val);
    }
  }

  function handleSolve() {
    let first = parseFloat(firstNumbers);
    let second = parseFloat(secondNumbers);
    if (operands === "+") {
      result = first + second;
    } else if (operands === "-") {
      result = first - second;
    } else if (operands === "/") {
      result = first / second;
    } else {
      result = first * second;
    }
    console.log(result);
  }

  return (
    <div className="main">
      {/* Header */}
      <div className="header">
        <h1 className="calc">calc</h1>
        <div className="themeBox">
          <h4 className="theme">Theme</h4>
          <div className="themeBtn">
            <div className="count">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="container">
              <div className="colorBtn"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="inpt">
        <input
          type="text"
          placeholder=""
          className="display"
          value={"399,981"}
        />
      </div>

      {/* Buttons */}
      <div className="calcBtn">
        <button className="btn" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="btn" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="btn" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="btn btn-blue">DEL</button>
        <button className="btn" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="btn" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="btn" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="btn" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="btn" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="btn" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="btn" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="btn" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="btn" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="btn" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="btn" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="btn" onClick={() => handleClick("x")}>
          x
        </button>
        <button className="btn reset btn-blue">RESET</button>
        <button className="btn equal" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
