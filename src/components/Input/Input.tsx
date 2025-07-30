// src/components/Input/Input.tsx
import React, { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor={props.name}>{label}</label>
        <input ref={ref} {...props} className={error ? styles.errorBorder : ''} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
