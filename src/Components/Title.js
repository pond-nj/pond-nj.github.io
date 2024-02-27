export function H1({ children, className, notBold, underline, italic }) {
  return (
    <h1
      className={`${notBold ? "" : "font-bold"} text-2xl ${className} ${
        underline ? "underline" : ""
      } ${italic ? "italic" : ""}`}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, notBold, underline, italic }) {
  return (
    <h2
      className={`${notBold ? "" : "font-bold"} text-xl ${className} ${
        underline ? "underline" : ""
      } ${italic ? "italic" : ""}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, notBold, underline, italic }) {
  return (
    <h3
      className={`${notBold ? "" : "font-bold"} text-lg ${className} ${
        underline ? "underline" : ""
      } ${italic ? "italic" : ""}`}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, notBold, underline, italic }) {
  return (
    <h4
      className={`${notBold ? "" : "font-bold"} text-md ${className} ${
        underline ? "underline" : ""
      } ${italic ? "italic" : ""}`}
    >
      {children}
    </h4>
  );
}

export function H5({ children, className, notBold, underline, italic }) {
  return (
    <h5
      className={`${notBold ? "" : "font-bold"} text-sm ${className} ${
        underline ? "underline" : ""
      } ${italic ? "italic" : ""}`}
    >
      {children}
    </h5>
  );
}
