import ClickableImage from "../Components/Images/ClickableImage";
import Image from "../Components/Images/Image";
import { H3, H4, H5 } from "../Components/Title";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row gap-2 rounded-lg">
      <div>
        <ClickableImage
          src={"https://i.ibb.co/WVL34pN/IMG-0808.jpg"}
          fullSrc={"https://img.hotimg.com/IMG_8426.jpeg"}
          className="hidden sm:block h-60 w-60 rounded-lg"
          alt="logo"
        />
      </div>
      <div className="flex-1 flex flex-col bg-amber-100 p-4 rounded-lg">
        <H3>Nutdranai Jaruthikorn</H3>
        <H4 notBold italic>
          pond-nj at outlook.com
        </H4>
        <div className="flex-1 py-2">
          <div>
            <span className="underline">2020-24</span> Computer Science at The
            Chinese University of Hong Kong
          </div>
          <div>
            <span className="underline">2017-20</span> High School at Mahidol
            Wittayanusorn School
          </div>
        </div>
        <span className="italic">
          Intelligence has its limits. Stupidity has none.
        </span>
      </div>
    </header>
  );
}
