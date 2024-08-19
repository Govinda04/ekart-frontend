import React from "react";
import "./styles/atomStyle.css";

interface Props {
  label?: string;
  onClick?: () => void;
  containerClass?: string;
  btnClass?: string;
}

const Button = (props: Props) => {
  const { label, onClick = () => {}, containerClass, btnClass } = props;

  return (
    <div className={containerClass}>
      <button onClick={onClick} className={btnClass}>
        {label}
      </button>
    </div>
  );
};

export default Button;
