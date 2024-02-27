import { A } from "../Element";

export default function FootLinks({ links }) {
  return (
    <div className="flex flex-row space-x-1">
      {links
        ? links.map((link) => {
            return (
              <A link={link.url} des={link.show}>
                <div className="flex flex-row items-center">
                  <div>{link.icon ? link.icon : null}</div>
                  <span>{link.text}</span>
                </div>
              </A>
            );
          })
        : null}
    </div>
  );
}
