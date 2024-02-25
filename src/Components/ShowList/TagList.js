export default function TagList({ tags, colorClass = "" }) {
  if (!tags) return null;

  return (
    <div>
      <div className="flex flex-row space-x-2">
        {Object.values(tags)
          .flat()
          .map((t) => {
            return (
              <span
                className={`rounded-lg saturate-[3] px-1 ${colorClass} flex flex-col justify-center`}
              >
                {t}
              </span>
            );
          })}
      </div>
    </div>
  );
}
