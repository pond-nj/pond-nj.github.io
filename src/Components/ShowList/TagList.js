export default function TagList ({ tags, colorClass = '' }) {
  if (!tags) return null

  return (
    <div>
      <div className='flex flex-row invisible	sm:visible space-x-2'>
        {Object.values(tags)
          .flat()
          .map(t => {
            return (
              <span
                className={`rounded-lg saturate-[3] px-1 ${colorClass} flex flex-col justify-center text-xs sm:text-sm`}
              >
                {t}
              </span>
            )
          })}
      </div>
    </div>
  )
}
