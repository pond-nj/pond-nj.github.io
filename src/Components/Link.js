export default function Link ({ href, children }) {
  return (
    <a
      href={href}
      className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
    >
      {children}
    </a>
  )
}
