import { A } from "../Element";

export default function FootLinks({ links }) {
  return (
    <div className="flex flex-row space-x-1">
      {links
        ? links.map((link) => {
            return <A link={link.url} des={link.show} />;
          })
        : null}
    </div>
  );
}
