import { useRef } from "react";
import "./moonLight.css";
import { Link } from "react-router-dom";

function MoonLight() {
  const inputBox = useRef();
  const deleteBtn = useRef();
  let displayArr = [];
  let arr = [];

  function handleDelete() {
    displayArr.pop();
    handleDisplayArr();
    inputBox.current.value = "";
    for (let i = 0; i < displayArr.length; i++) {
      let val = displayArr[i];
      inputBox.current.value += val;
    }
  }

  function handleDisplayArr() {
    let str = "";
    let resultArr = [];
    for (let i = 0; i < displayArr.length; i++) {
      if (
        displayArr[i] == "+" ||
        displayArr[i] == "-" ||
        displayArr[i] == "x" ||
        displayArr[i] == "/"
      ) {
        resultArr.push(str);
        str = "";
        resultArr.push(displayArr[i]);
      } else {
        str += displayArr[i];
      }
    }
    resultArr.push(str);
    arr = resultArr;
  }

  function handleClick(val) {
    inputBox.current.value += val;
    displayArr.push(val);
    handleDisplayArr();
  }

  function handleSolve() {
    let result = 0;
    let operator = "+";

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        operator = "+";
      } else if (arr[i] === "-") {
        operator = "-";
      } else if (arr[i] === "/") {
        operator = "/";
      } else if (arr[i] === "x") {
        operator = "*";
      } else {
        if (operator == "+") {
          result += parseFloat(arr[i]);
        } else if (operator == "-") {
          result -= parseFloat(arr[i]);
        } else if (operator == "/") {
          result /= parseFloat(arr[i]);
        } else if (operator == "*") {
          result *= parseFloat(arr[i]);
        }
      }
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
