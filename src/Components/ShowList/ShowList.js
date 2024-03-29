import { useState } from "react";
import { Card } from "../Card";
import { A } from "../Element";
import Image from "../Images/Image";
import { H2, H3 } from "../Title";
import { ToggleDiv } from "../ToggleDiv";
import Header from "./Header";
import TagCheckbox from "./TagCheckbox";
import TagList from "./TagList";
import Body from "./Body";
import FootLinks from "./FootLinks";
import ClickableImage from "../Images/ClickableImage";

export default function ShowList({
  colorClass,
  title,
  list,
  description,
  gridClassName = "flex flex-col space-y-1",
  seeMoreLink,
  show = false,
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

  const imgClass =
    "w-full h-40 xs:w-24 xs:h-24 sm:w-40 sm:h-40 object-cover rounded-lg";

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
  console.log(title, show);

  return (
    <div className={`rounded-lg bg-slate-100 p-2`}>
      <ToggleDiv
        title={<Header title={title} seeMoreLink={seeMoreLink} />}
        show={show}
        titleClass="bg-slate-200 rounded-lg"
      >
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
                <Card
                  className="flex flex-col xs:flex-row gap-2"
                  bg={colorClass}
                >
                  <div className="">
                    {l.fullImage ? (
                      <ClickableImage
                        src={l.image}
                        fullSrc={l.fullImage}
                        alt={l.title}
                        className={imgClass}
                        fullImgClassName="h-5/6"
                      />
                    ) : (
                      <Image src={l.image} className={imgClass} alt="" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-row justify-between">
                      <H3 className="inline">{l.title}</H3>
                      <TagList tags={l.tags} colorClass={colorClass} />
                    </div>
                    <Body subtitle={l.subtitle} description={l.description} />
                    <FootLinks links={l.links} />
                  </div>
                </Card>
              );
            })}
        </div>
      </ToggleDiv>
    </div>
  );
}
