import "./button.scss";

const Button = ({ className, text }) => {
  return <buttton className={`btn ${className}`}>{text}</buttton>;
};

export default Button;
