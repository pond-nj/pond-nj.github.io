/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import { _Image } from "./Image";
import { Images } from "@phosphor-icons/react";

const FullImage = ({ setShowFull, src, alt, className }) => {
  // TODO: Add a close button
  console.log("tes");
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        setShowFull(false);
      }}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
      onPointerEnter={(e) => {
        e.stopPropagation();
      }}
      onPointerMove={(e) => {
        e.stopPropagation();
      }}
    >
      <_Image
        src={src}
        alt={alt}
        className={`${className} w-5/6 h-auto xl:w-auto xl:h-5/6 z-50`}
      />
    </div>
  );
};

export default function ClickableImage({
  src,
  fullSrc = "",
  alt = "",
  className = "",
  fullImgClassName = "",
}) {
  const [showFull, setShowFull] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  return (
    <>
      {showFull && (
        <FullImage
          setShowFull={setShowFull}
          src={fullSrc === "" ? src : fullSrc}
          alt={alt}
          className={fullImgClassName}
        />
      )}
      {/* TODO: add mini icon to show that it can be expanded */}
      <div className="relative">
        <_Image
          src={src}
          alt={alt}
          className={`${className} cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setShowFull(true);
          }}
          onMouseOver={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
        />
        {showIcon && (
          <div className="bg-slate-200 absolute bottom-2 right-2 rounded p-0.5">
            <Images weight="fill" />
          </div>
        )}
      </div>
    </>
  );
}
