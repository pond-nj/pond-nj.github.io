export function A({ link, children }) {
  return (
    <a href={link} className="underline" target="_blank">
      {children}
    </a>
  );
}
