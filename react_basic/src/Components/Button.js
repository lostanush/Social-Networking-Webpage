const Button = (props) => (
  <button onClick={props.handleClick} type="button" className="btn btn-primary">
    {props.title}
  </button>
);

export default Button;
