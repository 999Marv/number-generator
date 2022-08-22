import "./App.css";
import { Fragment, useState } from "react";
import Form from "./Components/Form";
import UseStore from "./Components/store/UseStore";

function App() {
  const [num, setNum] = useState(0);
  // const [genNum, setGenNum] = useState("Generate a number!");

  const genNum = UseStore((state) => state.genNum);

  const generator = UseStore((state) => state.generator);

  const submit = (e) => {
    e.preventDefault();
  };

  // const generator = (num) => {
  //   setGenNum(Math.trunc(Math.random() * num) + 1);
  // };

  return (
    <Fragment>
      <Form
        value={num}
        submitHandler={submit}
        clickHandler={() => {
          generator(num);
        }}
        changeHandler={(e) => setNum(e.target.value)}
        genNum={genNum}
      />
    </Fragment>
  );
}

export default App;
