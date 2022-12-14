import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isValid}: IButtonProps) => {
  if(isValid){
    return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
  } else {
    return <></>;
  }
};

export default Button;
