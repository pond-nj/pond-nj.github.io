import ClickableImage from "../Components/Images/ClickableImage";
import Image from "../Components/Images/Image";
import { H3 } from "../Components/Title";

export default function Header() {
  return (
    <header className="flex flex-row space-x-2 rounded-lg">
      <div>
        <ClickableImage
          src={"https://i.ibb.co/tD1TChN/IMG-8426.jpg"}
          fullSrc={"https://img.hotimg.com/IMG_8426.jpeg"}
          className="h-40 w-40 rounded-lg"
          alt="logo"
        />
      </div>
      <div className="flex-1 flex flex-col bg-amber-100 p-4 rounded-lg">
        <H3>Nutdranai Jaruthikorn</H3>
        <H3>pond-nj at outlook.com</H3>
        <div className="flex flex-row space-x-2 flex-1">
          <div>
            <div>2020 - 2024</div>
            <div>2017 - 2020</div>
          </div>
          <div className="flex-1">
            <div>
              CS Bachelor student at The Chinese University of Hong Kong
            </div>
            <div>High School at Mahidol Wittayanusorn School</div>
          </div>
        </div>
      </div>
    </header>
  );
}
