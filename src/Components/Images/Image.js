/* eslint-disable react/jsx-pascal-case */
export const _Image = ({
  src,
  alt = "",
  className = "",
  onClick,
  onMouseOver,
  onMouseLeave,
}) => {
  if (!src) return null;

  const placeHolderImg =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";

  return (
    <img
      // TODO(Pond): can we do a checking if the src is a valid image?
      src={src === "" ? placeHolderImg : src}
      className={className}
      alt={alt}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default function Image({ src, alt = "", className = "" }) {
  return <_Image src={src} alt={alt} className={className} />;
}
