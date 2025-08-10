import { HeaderSection } from "./HeaderSection";
import { SocialBox } from "./SocialBox";
import iconFb from "../assets/images/icon-facebook.svg";
import iconInsta from "../assets/images/icon-instagram.svg";
import iconTw from "../assets/images/icon-twitter.svg";
import iconYt from "../assets/images/icon-youtube.svg";
import { OverviewBox } from "./OverviewBox";

const OverviewData = [
  { typeOfStat: "Page Views", count: 87, percent: "3%", img: iconFb, up: true },
  { typeOfStat: "Likes", count: 52, percent: "2%", img: iconFb, up: false },
  {
    typeOfStat: "Likes",
    count: 5462,
    percent: "2257%",
    img: iconInsta,
    up: true,
  },
  {
    typeOfStat: "Profile Views",
    count: "52k",
    percent: "1375%",
    img: iconInsta,
    up: true,
  },
  {
    typeOfStat: "Retweets",
    count: 117,
    percent: "303%",
    img: iconTw,
    up: true,
  },
  {
    typeOfStat: "Likes",
    count: 507,
    percent: "553%",
    img: iconTw,
    up: true,
  },
  {
    typeOfStat: "Likes",
    count: 107,
    percent: "19%",
    img: iconYt,
    up: false,
  },
  {
    typeOfStat: "Total Views",
    count: 1407,
    percent: "12%",
    img: iconYt,
    up: false,
  },
];

export function MainPage() {
  return (
    <main className="p-[4%] md:px-[10%] flex flex-col ">
      <HeaderSection />
      <div className="md:grid md:grid-cols-4 gap-x-6">
        <SocialBox
          iconImg={iconFb}
          borderOf={"fb"}
          userName={"@nathanf"}
          userNumber={"1987"}
          countOf={"Followers"}
          countNumber={"12"}
          upOrDown={true}
        />
        <SocialBox
          iconImg={iconTw}
          borderOf={"tw"}
          userName={"@nathanf"}
          userNumber={"1044"}
          countOf={"Followers"}
          countNumber={"99"}
          upOrDown={true}
        />
        <SocialBox
          iconImg={iconInsta}
          borderOf={"insta"}
          userName={"@realnathanf"}
          userNumber={"11k"}
          countOf={"Followers"}
          countNumber={"1099"}
          upOrDown={true}
        />
        <SocialBox
          iconImg={iconYt}
          borderOf={"yt"}
          userName={"Nathan F."}
          userNumber={"8239"}
          countOf={"Subscribers"}
          countNumber={"144"}
          upOrDown={false}
        />
      </div>
      <p className="text-2xl font-semibold text-Gray-650-Text mt-6 mb-2 float-left">
        Overview - Today
      </p>
      <div className="md:grid md:grid-cols-4 gap-x-4">
        {OverviewData.map((item) => {
          return (
            <OverviewBox
              typeOfStat={item.typeOfStat}
              key={item.count}
              count={item.count}
              iconImg={item.img}
              up={item.up}
              percent={item.percent}
            />
          );
        })}
      </div>
    </main>
  );
}
