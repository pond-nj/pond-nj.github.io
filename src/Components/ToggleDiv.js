import { useState } from 'react'

export function ToggleDiv ({
  children,
  title = '',
  show = false,
  titleClass = '',
  allowToggle = true
}) {
  const [showToggle, setShowToggle] = useState(show || !allowToggle)
  return (
    <div className='flex flex-col space-y-1'>
      <div
        className={`flex flex-row ${
          allowToggle ? 'cursor-pointer' : ''
        } ${titleClass} space-x-1`}
        onClick={allowToggle ? () => setShowToggle(!showToggle) : null}
      >
        {allowToggle ? (
          <div>
            <div
              className={`${showToggle ? 'rotate-90' : ''} linear duration-100`}
            >
              &#x25B6;
            </div>
          </div>
        ) : null}
        <span className='hover:bg-opacity-50 bg-opacity-0 bg-slate-200'>
          {title}
        </span>
      </div>

      <div
        className={`${
          showToggle ? 'max-h-screen' : 'max-h-0'
        } overflow-auto linear duration-100`}
      >
        {children}
      </div>
    </div>
  )
}
