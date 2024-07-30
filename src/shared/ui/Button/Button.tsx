import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import * as classes from './Button.module.scss';

export enum ButtonStyle {
  TEXT = 'text',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: ButtonStyle;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, buttonStyle, children, ...otherProps } = props;

  return (
    <button className={classNames(classes.btn, [className, classes[buttonStyle]])} {...otherProps}>
      {children}
    </button>
  )
}
