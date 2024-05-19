import { useRef, useState } from "react";
import "./app.css";
import { Link } from "react-router-dom";

function App() {
  const inputBox = useRef();
  const deleteBtn = useRef();
  let numsArr = [];
  let firstNumbers = "";
  let secondNumbers = "";
  let operands;
  let result;
  let displayArr = [];

  function showNumber() {
    inputBox.current.value = "";
    for (let i = 0; i < displayArr.length; i++) {
      let val = displayArr[i];
      inputBox.current.value += val;
    }
  }

  function handleDelete() {
    displayArr.pop();
    showNumber();
  }

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
      firstNumbers += numsArr[0];
      numsArr.pop();
      displayArr.push(val);
      inputBox.current.value += val;
    } else if (
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
      secondNumbers += numsArr[1];
      numsArr.pop();
      displayArr.push(val);
      inputBox.current.value += val;
    } else if (val == "+" || val == "-" || val == "x" || val == "/") {
      numsArr.push(val);
      operands = numsArr[0];
      displayArr.push(val);
      inputBox.current.value += val;
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
    inputBox.current.value = result;
    deleteBtn.current.disabled = true;
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
              <span>
                <Link to={"/"} className="link">
                  1
                </Link>
              </span>
              <span>
                <Link to={"/moonlight"} className="link">
                  2
                </Link>
              </span>
              <span>
                <Link to={"/dracula"} className="link">
                  3
                </Link>
              </span>
            </div>
            <div className="container">
              <Link className="colorBtn" to={"/"}></Link>
              <Link
                className="colorBtn"
                to={"/moonlight"}
                style={{
                  backgroundColor: "hsl(223, 31%, 20%)",
                }}
              ></Link>
              <Link
                className="colorBtn"
                to={"/dracula"}
                style={{
                  backgroundColor: "hsl(223, 31%, 20%)",
                }}
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="inpt">
        <input ref={inputBox} type="text" placeholder="" className="display" />
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
        <button
          ref={deleteBtn}
          onClick={() => handleDelete()}
          className="btn btn-blue"
        >
          DEL
        </button>
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
        <button
          className="btn reset btn-blue"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
        <button className="btn equal" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
