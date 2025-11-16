export function H1 ({ children, className, notBold, underline, italic }) {
  return (
    <div
      className={`${notBold ? '' : 'font-bold'} text-2xl ${className} ${
        underline ? 'underline' : ''
      } ${italic ? 'italic' : ''}`}
    >
      {children}
    </div>
  )
}

export function H2 ({ children, className, notBold, underline, italic }) {
  return (
    <div
      className={`${notBold ? '' : 'font-bold'} text-xl ${className} ${
        underline ? 'underline' : ''
      } ${italic ? 'italic' : ''}`}
    >
      {children}
    </div>
  )
}

export function H3 ({ children, className, notBold, underline, italic }) {
  return (
    <div
      className={`${notBold ? '' : 'font-medium'} text-lg ${className} ${
        underline ? 'underline' : ''
      } ${italic ? 'italic' : ''}`}
    >
      {children}
    </div>
  )
}

export function H4 ({ children, className, notBold, underline, italic }) {
  return (
    <div
      className={`${notBold ? '' : 'font-bold'} text-md ${className} ${
        underline ? 'underline' : ''
      } ${italic ? 'italic' : ''}`}
    >
      {children}
    </div>
  )
}

export function H5 ({ children, className, notBold, underline, italic }) {
  return (
    <div
      className={`${notBold ? '' : 'font-bold'} text-sm ${className} ${
        underline ? 'underline' : ''
      } ${italic ? 'italic' : ''}`}
    >
      {children}
    </div>
  )
}
