import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <input type="number" onChange={props.changeHandler}></input>
      <button onClick={props.clickHandler}>Generate</button>
      <p>{props.genNum}</p>
    </form>
  );
};

export default Form;
