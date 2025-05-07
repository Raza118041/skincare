import BeautyGuide from "./components/BeautyGuide/beautyguide";
import CTA from "./components/CTASection/cta";
import HeroSection from "./components/HeroSection/herosection";
import Service from "./components/Services/service";
import Transformation from "./components/Transformation/transformation";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="py-10 px-6 md:py-16">
        <BeautyGuide />
      </div>
      <Service />
      <Transformation />
      <CTA />
    </div>
  );
}
