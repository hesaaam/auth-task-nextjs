// src/components/Button/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <button className={styles.button} disabled={isLoading} {...props}>
      {isLoading ? 'در حال پردازش...' : children}
    </button>
  );
};

export default Button;
