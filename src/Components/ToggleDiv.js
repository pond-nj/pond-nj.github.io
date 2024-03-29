import { useState } from "react";

export function ToggleDiv({
  children,
  title = "",
  show = false,
  titleClass = "",
}) {
  const [showToggle, setShowToggle] = useState(show);
  return (
    <div className="flex flex-col space-y-1">
      <div
        className={`flex flex-row cursor-pointer ${titleClass} space-x-1`}
        onClick={() => setShowToggle(!showToggle)}
      >
        <div>
          <div
            className={`${showToggle ? "rotate-90" : ""} linear duration-100`}
          >
            &#x25B6;
          </div>
        </div>
        <span className="hover:bg-opacity-50 bg-opacity-0 bg-slate-200">
          {title}
        </span>
      </div>

      <div
        className={`${
          showToggle ? "max-h-screen" : "max-h-0"
        } overflow-auto linear duration-100`}
      >
        {children}
      </div>
    </div>
  );
}
