import clsx from "clsx";
import styles from "./Button.module.css";

const VARIANTS = [
  "primary",
  "primaryInverse",
  "accent",
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
  startIcon,
  endIcon,
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
    {startIcon && (
        <span className={styles.startIcon}>
          {startIcon}
        </span>
      )}

      <span>{children}</span>

      {endIcon && (
        <span className={styles.endIcon}>
          {endIcon}
        </span>
      )}
    </button>
  );
}