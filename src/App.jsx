import { useRef } from "react";
import "./app.css";
import { Link } from "react-router-dom";

function App() {
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
