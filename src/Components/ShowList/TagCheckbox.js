import { H4 } from "../Title";

export default function TagCheckbox({ tags, setShowTags, showTags }) {
  return (
    <div>
      {Object.keys(tags).map((type) => {
        return (
          <div className="flex flex-row space-x-2">
            <H4>{type}:</H4>
            <div className="flex flex-wrap flex-row space-x-2">
              {tags[type].map((t) => {
                return (
                  <span className="flex flex-row space-x-1">
                    <label for={t}>{t}</label>
                    <input
                      name={t}
                      type="checkbox"
                      id={t}
                      defaultChecked={showTags[type][t]}
                      onChange={(e) => {
                        const _showTags = {};
                        Object.keys(showTags).forEach((type) => {
                          _showTags[type] = { ...showTags[type] };
                        });

                        _showTags[type][t] = e.target.checked;
                        setShowTags(_showTags);
                      }}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
