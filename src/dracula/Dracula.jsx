import React from "react";
import "./dracula.css";
import { Link } from "react-router-dom";

function Dracula() {
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
    <div className="mainDracula">
      {/* Header */}
      <div className="headerDracula">
        <h1 className="calc">calc</h1>
        <div className="themeBoxDracula">
          <h4 className="theme">Theme</h4>
          <div className="themeBtnDracula">
            <div className="countDracula">
              <span>
                <Link to={"/"} className="linkDracula">
                  1
                </Link>
              </span>
              <span>
                <Link to={"/moonlight"} className="linkDracula">
                  2
                </Link>
              </span>
              <span>
                <Link to={"/dracula"} className="linkDracula">
                  3
                </Link>
              </span>
            </div>
            <div className="containerDracula">
              <Link
                className="colorBtnDracula"
                to={"/"}
                style={{
                  backgroundColor: "hsl(268, 71%, 12%)",
                }}
              ></Link>
              <Link
                className="colorBtnDracula"
                to={"/moonlight"}
                style={{
                  backgroundColor: "hsl(268, 71%, 12%)",
                }}
              ></Link>
              <Link className="colorBtnDracula" to={"/dracula"}></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="inptDracula">
        <input
          type="text"
          placeholder=""
          className="displayDracula"
          value={"399,981"}
        />
      </div>

      {/* Buttons */}
      <div className="calcBtnDracula">
        <button className="btnDracula" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="btnDracula" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="btnDracula" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="btnDracula btn-blue-dracula">DEL</button>
        <button className="btnDracula" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="btnDracula" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="btnDracula" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="btnDracula" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="btnDracula" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="btnDracula" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="btnDracula" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="btnDracula" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="btnDracula" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="btnDracula" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="btnDracula" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="btnDracula" onClick={() => handleClick("x")}>
          x
        </button>
        <button className="btnDracula resetDracula btn-blue-dracula">RESET</button>
        <button className="btnDracula equalDracula" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default Dracula;
