// import { ButtonHTMLAttributes } from 'react';
// import * as Styled from './Button.styled';

// export enum BUTTON_TYPE_CLASSES {
//   base = 'base',
//   login = 'login',
//   signup = 'signup',
// }

// const getButton = (
//   buttonType = BUTTON_TYPE_CLASSES.base
// ): typeof Styled.BaseButton =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: Styled.BaseButton,
//     [BUTTON_TYPE_CLASSES.login]: Styled.LoginButton,
//     [BUTTON_TYPE_CLASSES.signup]: Styled.SignUpButton,
//   }[buttonType]);

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   buttonType?: BUTTON_TYPE_CLASSES;
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   buttonType,
//   ...otherProps
// }) => {
//   const CustomButton = getButton(buttonType);

//   return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

// export default Button;

export {};
