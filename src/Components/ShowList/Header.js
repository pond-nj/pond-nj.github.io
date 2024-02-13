import { A } from "../Element";
import { H2 } from "../Title";

export default function Header({ title, seeMoreLink }) {
  return (
    <header className="flex flex-row justify-between">
      <H2 className="font-bold">{title}</H2>
      {seeMoreLink ? <A link={seeMoreLink} des="see more"></A> : null}
    </header>
  );
}
