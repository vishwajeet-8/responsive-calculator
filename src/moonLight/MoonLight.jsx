import { useRef } from "react";
import "./moonLight.css";
import { Link } from "react-router-dom";

function MoonLight() {
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
          ref={inputBox}
          type="text"
          placeholder=""
          className="displayMoon"
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
        <button
          ref={deleteBtn}
          onClick={() => handleDelete()}
          className="btnMoon btn-blue-moon"
        >
          DEL
        </button>
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
        <button
          className="btnMoon resetMoon btn-blue-moon"
          onClick={() => window.location.reload()}
        >
          RESET
        </button>
        <button className="btnMoon equalMoon" onClick={handleSolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default MoonLight;
