import { useState } from "react";

export function Card({
  children,
  bg = "",
  className,
  bgHover = "bg-slate-300",
}) {
  return (
    <div
      // className={`${bg} rounded-lg p-2 ${className} hover:saturate-150`}
      className={`${bg} rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
}
