import { useState } from "react";
import { Card } from "../Card";
import { A } from "../Element";
import Image from "../Image";
import { H2, H3 } from "../Title";
import { ToggleDiv } from "../ToggleDiv";
import Header from "./Header";
import TagCheckbox from "./TagCheckbox";
import TagList from "./TagList";

export default function ShowList({
  colorClass,
  title,
  list,
  description,
  gridClassName = "flex flex-col space-y-1",
  seeMoreLink,
}) {
  // const list[0] = {
  //     title:
  //     image:
  //     subtitle:
  //     links:[
  //         [
  //             "link",
  //             "description"
  //         ]
  //     ]
  //     description:
  // };

  const tagsCount = {};
  list.forEach((l) => {
    if (l.tags) {
      for (const [type, tags] of Object.entries(l.tags)) {
        if (!(type in tagsCount)) {
          tagsCount[type] = {};
        }
        tags.forEach((t) => {
          if (t in tagsCount[type]) {
            tagsCount[type][t] += 1;
          } else {
            tagsCount[type][t] = 0;
          }
        });
      }
    }
  });

  let sortTags = {};
  for (const [type, tags] of Object.entries(tagsCount)) {
    sortTags[type] = Object.keys(tags).sort((t1, t2) => tags[t1] - tags[t2]);
  }

  const _showTags = {};
  for (const [type, tags] of Object.entries(sortTags)) {
    if (!(type in _showTags)) {
      _showTags[type] = {};
    }
    for (const t of tags) {
      _showTags[type][t] = true;
    }
  }
  const [showTags, setShowTags] = useState(_showTags);

  return (
    <div className={`${colorClass} rounded-lg bg-slate-100 p-2`}>
      <Header title={title} seeMoreLink={seeMoreLink} />
      {description ? <p>{description}</p> : null}
      <TagCheckbox
        tags={sortTags}
        setShowTags={setShowTags}
        showTags={showTags}
      />
      <div className={gridClassName}>
        {list
          .filter((l) => {
            if (l.tags) {
              for (const type of Object.keys(l.tags)) {
                for (const t of l.tags[type]) {
                  if (showTags[type][t]) {
                    return true;
                  }
                }
              }
              return false;
            }
            return true;
          })
          .map((l) => {
            return (
              <Card className="flex flex-row space-x-2" bg={colorClass}>
                <Image
                  src={l.image}
                  className="w-20 h-20 object-cover"
                  alt=""
                />
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-row space-x-4">
                    <H3 className="inline">{l.title}</H3>
                    <TagList tags={l.tags} colorClass={colorClass} />
                  </div>
                  <div className="flex-1">
                    {l.subtitle ? (
                      <ToggleDiv title={l.subtitle}>
                        <p>{l.description}</p>
                      </ToggleDiv>
                    ) : (
                      <p>{l.description}</p>
                    )}
                  </div>

                  {l.links
                    ? l.links.map((link) => {
                        return <A link={link.url} des={link.show} />;
                      })
                    : null}
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}
