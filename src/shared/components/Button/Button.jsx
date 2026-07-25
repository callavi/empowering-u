import clsx from "clsx";
import styles from "./Button.module.css";

const VARIANTS = [
  "primary",
  "secondary",
  "outline",
  "text",
  "icon",
];

const SIZES = [
  "small",
  "medium",
  "large",
];

export function Button({
  variant = VARIANTS[0],
  size = SIZES[1],
  className,
  children,
  type = "button",
  ...props
}) {
  return (
    <button
      type = {type}
      className={clsx(
        styles.base,
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}