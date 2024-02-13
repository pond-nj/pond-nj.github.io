export default function Image({ src, alt = "", className = "" }) {
  if (!src) return null;

  const placeHolderImg =
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
  return (
    <img
      src={src === "" ? placeHolderImg : src}
      className={className}
      alt={alt}
    />
  );
}
