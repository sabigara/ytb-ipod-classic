import clsx from "clsx";
import React from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";

type Props = {
  className?: string;
  style?: React.CSSProperties;
};

export default function Cover({ className, style }: Props) {
  return (
    <div
      className={clsx(
        "bg-slate-400 w-[150px] h-[150px] grid place-content-center",
        className
      )}
      style={{
        transform: "perspective(200px) rotateY(12deg)",
        ...style,
      }}
    >
      <BsMusicNoteBeamed className="w-24 h-24 text-white -translate-x-2" />
    </div>
  );
}
