import { HeaderSection } from "./HeaderSection";
import { SocialBox } from "./SocialBox";

export function MainPage() {
  return (
    <main className="p-[4%] md:px-[10%] flex flex-col">
      <HeaderSection />
      <SocialBox />
    </main>
  );
}
