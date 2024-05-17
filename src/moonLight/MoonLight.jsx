import React from "react";
import "./moonLight.css";
import { Link } from "react-router-dom";

function MoonLight() {
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
    <div className="mainMoon">
      {/* Header */}
      <div className="headerMoon">
        <h1 className="calc">calc</h1>
        <div className="themeBoxMoon">
          <h4 className="theme">Theme</h4>
          <div className="themeBtnMoon">
            <div className="countMoon">
              <span>
                <Link to={"/"} className="linkMoon">
                  1
                </Link>
              </span>
              <span>
                <Link to={"/moonlight"} className="linkMoon">
                  2
                </Link>
              </span>
              <span>
                <Link to={"/dracula"} className="linkMoon">
                  3
                </Link>
              </span>
            </div>
            <div className="containerMoon">
              <Link
                className="colorBtnMoon"
                to={"/"}
                style={{
                  backgroundColor: "hsl(0, 5%, 81%)",
                }}
              ></Link>
              <Link className="colorBtnMoon" to={"/moonlight"}></Link>
              <Link
                className="colorBtnMoon"
                to={"/dracula"}
                style={{
                  backgroundColor: "hsl(0, 5%, 81%)",
                }}
              ></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="inptMoon">
        <input
          type="text"
          placeholder=""
          className="displayMoon"
          value={"399,981"}
        />
      </div>

      {/* Buttons */}
      <div className="calcBtnMoon">
        <button className="btnMoon" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="btnMoon" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="btnMoon" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="btnMoon btn-blue-moon">DEL</button>
        <button className="btnMoon" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="btnMoon" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="btnMoon" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="btnMoon" onClick={() => handleClick("+")}>
          +
        </button>
        <button className="btnMoon" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="btnMoon" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="btnMoon" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="btnMoon" onClick={() => handleClick("-")}>
          -
        </button>
        <button className="btnMoon" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="btnMoon" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="btnMoon" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="btnMoon" onClick={() => handleClick("x")}>
          x
        </button>
        <button className="btnMoon resetMoon btn-blue-moon">RESET</button>
        <button className="btnMoon equalMoon" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default MoonLight;
