import BeautyGuide from "./components/BeautyGuide/beautyguide";
import HeroSection from "./components/HeroSection/herosection";
import Service from "./components/Services/service";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="py-10 px-6 md:py-16">
        <BeautyGuide />
      </div>
      <Service />
    </div>
  );
}
