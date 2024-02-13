import { useState } from "react";

export function Card({
  children,
  bg = "",
  className,
  link,
  bgHover = "bg-slate-300",
}) {
  return (
    <div
      className={`${bg} rounded-lg p-2 ${className} ${
        link ? "hover:cursor-pointer" : ""
      } hover:saturate-150`}
    >
      {children}
    </div>
  );
}
