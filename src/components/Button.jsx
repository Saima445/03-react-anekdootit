const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
    <i className="fa-regular fa-hand-pointer fa-rotate-90 fa-sm"></i>
  </button>
);

export default Button;
