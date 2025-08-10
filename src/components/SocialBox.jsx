import iconUp from "../assets/images/icon-up.svg";
import iconDown from "../assets/images/icon-down.svg";
import clsx from "clsx";
export function SocialBox({
  iconImg,
  upOrDown,
  userName,
  userNumber,
  countOf,
  countNumber,
  borderOf,
}) {
  const borderColor = clsx({
    " tw ": borderOf == "tw",
    " fb ": borderOf == "fb",
    " insta ": borderOf == "insta",
    " yt ": borderOf == "yt",
  });
  const statColor = clsx({
    "text-Green-text": upOrDown,
    "text-Red-text": upOrDown == false,
  });
  return (
    <section className="w-full rounded-2xl relative mt-6 flex flex-col justify-center items-center gap-y-6 bg-Card-BG p-6">
      {/* top border */}
      <div
        className={`absolute top-0 left-0 rounded-t-2xl right-0 h-2 ${borderColor}`}
      ></div>
      {/* box content */}
      <div className="flex flex-row gap-x-4 items-center">
        <img src={iconImg} className="size-6" alt="" />
        <p className="text-base text-Gray-650-Text font-semibold">{userName}</p>
      </div>
      <p className="text-6xl font-extrabold text-Gray-950-Text">{userNumber}</p>
      <p className=" uppercase tracking-[0.3rem] -mt-6 text-base font-light text-Gray-650-Text">
        {countOf}
      </p>
      <div className="flex flex-row justify-center items-center">
        <img src={upOrDown ? iconUp : iconDown} className="w-4 mx-1" alt="" />
        <p className={`font-bold capitalize ${statColor}`}>
          {countNumber} today
        </p>
      </div>
    </section>
  );
}
