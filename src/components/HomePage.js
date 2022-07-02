import { useHistory } from "react-router-dom";
import $ from "jquery";

const HomePage = () => {
  const history = useHistory();

  const validationBeforeStart = () => {
    // validation for all the input fields in customise quiz section
    var operators = [];
    $("input.operator:checkbox:checked").each(function () {
      var sThisVal = $(this).val();

      if (sThisVal == "plus") {
        operators.push("+");
      } else if (sThisVal == "minus") {
        operators.push("-");
      } else if (sThisVal == "multiply") {
        operators.push("*");
      } else if (sThisVal == "divide") {
        operators.push("/");
      }
    });
    if (
      $("#qsNumInput").val() == "" ||
      $("#qsNumInput").val() > 20 ||
      $("#qsNumInput").val() < 5
    ) {
      alert("Enter Number of Questions to proceed & Max 20 Allowed & Min 5");
      return false;
    } else if (
      $("#qsOperandInput").val() == "" ||
      $("#qsOperandInput").val() > 15
    ) {
      alert("Enter Operand to proceed & Max 15 is allowed");
      return false;
    } else if (operators.length === 0) {
      alert("Select some operators to proceed");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <div className="row">
        {/*Random quiz section */}
        <div
          className="col-sm-6"
          style={{
            borderRight: "1px solid gold",
            height: "calc(100vh - 85px)",
          }}
        >
          <h1 className="quizHeadingName">Random Quiz</h1>
          <ul>
            <li>
              20 Mathematical Questions containing Random Number (upto 10) and
              Random Operators
            </li>
            <li>For each question you will get 20 seconds time</li>
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => {
              var operators = ["+", "-", "/", "*"];
              var obj = {
                numOfQs: 20,
                numOfOperands: 10,
                operators: operators,
              };
              history.push("/quiz", obj);
            }}
            style={{ float: "right" }}
          >
            Start Quiz
          </button>
        </div>
        {/*Customised quiz section */}
        <div className="col-sm-6">
          <h1 className="quizHeadingName">Customize Quiz</h1>
          <ul>
            <li>Customize your own quiz settings</li>
            <li>For each question you will get 20 seconds time</li>
            <li>Select Operator and Number range</li>
          </ul>
          <div className="row">
            <div className="col-sm-12">
              <label>Enter Number of Questions : &nbsp;</label>
              <input id="qsNumInput" type="number" />
            </div>
            <div className="col-sm-12">
              <label>Enter Operand (max is 15) : &nbsp;&nbsp;&nbsp;</label>
              <input id="qsOperandInput" type="number" />
            </div>
            <div className="col-sm-12">
              <label>
                Select which Operators you want to Practice : &nbsp;
              </label>
              <br />
              <input
                className="operator"
                type="checkbox"
                name="operator"
                value="plus"
              />
              <label>&nbsp; Plus (+)</label>
              <br />
              <input
                className="operator"
                type="checkbox"
                name="operator"
                value="minus"
              />
              <label> &nbsp; Minus (-)</label>
              <br />
              <input
                className="operator"
                type="checkbox"
                name="operator"
                value="multiply"
              />
              <label> &nbsp; Multiply (*)</label>
              <br />
              <input
                className="operator"
                type="checkbox"
                name="operator"
                value="divide"
              />
              <label> &nbsp; Divide (/)</label>
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              var x = validationBeforeStart();

              if (x) {
                var operators = [];
                $("input.operator:checkbox:checked").each(function () {
                  var sThisVal = $(this).val();

                  if (sThisVal == "plus") {
                    operators.push("+");
                  } else if (sThisVal == "minus") {
                    operators.push("-");
                  } else if (sThisVal == "multiply") {
                    operators.push("*");
                  } else if (sThisVal == "divide") {
                    operators.push("/");
                  }
                });
                var obj = {
                  numOfQs: $("#qsNumInput").val(),
                  numOfOperands: $("#qsOperandInput").val(),
                  operators: operators,
                };
                history.push("/quiz", obj);
              }
            }}
            style={{ float: "right" }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
