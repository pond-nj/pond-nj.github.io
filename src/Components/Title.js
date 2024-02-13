export function H2({ children, className }) {
  return <h2 className={`font-bold text-xl ${className}`}>{children}</h2>;
}

export function H3({ children, className }) {
  return <h3 className={`font-bold text-lg ${className}`}>{children}</h3>;
}

export function H4({ children, className }) {
  return <h4 className={`font-bold text-md ${className}`}>{children}</h4>;
}
