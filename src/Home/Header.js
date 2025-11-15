import ClickableImage from "../Components/Images/ClickableImage";
import Image from "../Components/Images/Image";
import { H1, H2, H3, H4, H5 } from "../Components/Title";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row gap rounded-lg">
      {/* <div>
        <ClickableImage
          src={"https://i.ibb.co/WVL34pN/IMG-0808.jpg"}
          fullSrc={"https://img.hotimg.com/IMG_8426.jpeg"}
          className="hidden sm:block h-60 w-60 rounded-lg"
          alt="logo"
        />
      </div> */}
      <div className="flex-1 flex flex-col bg-slate-100 p-4 rounded-lg">
        <H1>Nutdranai Jaruthikorn</H1>
        <H4 notBold italic>
          pond-nj at outlook.com
        </H4>
        <div className="flex-1 py-2">
          A Ph.D. student in Formal Verification
        </div>
        <span className="italic">Algorithm a day keeps the poverty away</span>
      </div>
    </header>
  );
}
