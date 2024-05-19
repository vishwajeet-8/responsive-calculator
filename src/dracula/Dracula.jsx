import { useRef } from "react";
import "./dracula.css";
import { Link } from "react-router-dom";

function Dracula() {
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
          ref={inputBox}
          type="text"
          placeholder=""
          className="displayDracula"
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
        <button
          ref={deleteBtn}
          onClick={() => handleDelete()}
          className="btnDracula btn-blue-dracula"
        >
          DEL
        </button>
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
        <button
          className="btnDracula resetDracula btn-blue-dracula"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
        <button className="btnDracula equalDracula" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default Dracula;
