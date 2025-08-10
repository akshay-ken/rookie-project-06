import clsx from "clsx";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";
export function OverviewBox({ typeOfStat, iconImg, count, up, percent }) {
  const textColor = clsx({
    "text-Green-text": up,
    "text-Red-text": up == false,
  });
  return (
    <section className="bg-Card-BG rounded-xl mb-4 p-6 flex flex-col gap-y-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-base font-semibold text-Gray-650-Text">
          {typeOfStat}
        </p>
        <img src={iconImg} className="size-6" alt="" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-3xl font-bold text-Gray-950-Text">{count}</p>
        <div className="flex flex-row items-center">
          <img src={up ? upIcon : downIcon} className="w-4 h-2" alt="" />
          <p className={`text-sm font-bold ${textColor}`}>{percent}</p>
        </div>
      </div>
    </section>
  );
}
