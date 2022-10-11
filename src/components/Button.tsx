import React from "react";
import clsx from "clsx";

type Props = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({
  children,
  className,
  onClick,
  disabled,
}: Props) {
  return (
    <button
      className={clsx("text-gray-400 font-bold p-2", className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
