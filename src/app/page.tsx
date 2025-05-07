import BeautyGuide from "./components/BeautyGuide/beautyguide";
import HeroSection from "./components/HeroSection/herosection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="py-10 px-6 md:py-20">
        <BeautyGuide />
      </div>
    </div>
  );
}
