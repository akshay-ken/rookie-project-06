import { HeaderSection } from "./HeaderSection";
import { SocialBox } from "./SocialBox";
import iconFb from "../assets/images/icon-facebook.svg";
import iconInsta from "../assets/images/icon-instagram.svg";
import iconTw from "../assets/images/icon-twitter.svg";
import iconYt from "../assets/images/icon-youtube.svg";

export function MainPage() {
  return (
    <main className="p-[4%] md:px-[10%] flex flex-col">
      <HeaderSection />
      <SocialBox
        iconImg={iconFb}
        userName={"@nathanf"}
        userNumber={"1987"}
        countOf={"Followers"}
        countNumber={"12"}
        upOrDown={true}
      />
      <SocialBox
        iconImg={iconTw}
        userName={"@nathanf"}
        userNumber={"1044"}
        countOf={"Followers"}
        countNumber={"99"}
        upOrDown={true}
      />
      <SocialBox
        iconImg={iconInsta}
        userName={"@realnathanf"}
        userNumber={"11k"}
        countOf={"Followers"}
        countNumber={"1099"}
        upOrDown={true}
      />
      <SocialBox
        iconImg={iconYt}
        userName={"Nathan F."}
        userNumber={"8239"}
        countOf={"Subscribers"}
        countNumber={"144"}
        upOrDown={false}
      />
    </main>
  );
}
