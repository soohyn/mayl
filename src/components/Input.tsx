import { ComponentProps, useId } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

function Input({ label, type, ...inputProps }: InputProps) {
  const id = useId();

  return (
    <div role="group">
      <label htmlFor={id}>
        <span>{label}</span>
      </label>
      <input type={type} {...inputProps} id={id} />
    </div>
  );
}

export default Input;
