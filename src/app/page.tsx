import Articles from "./components/ArticlesSection/articles";
import BeautyGuide from "./components/BeautyGuide/beautyguide";
import CTA from "./components/CTASection/cta";
import Gallery from "./components/GallerySection/gallery";
import HeroSection from "./components/HeroSection/herosection";
import Sponsors from "./components/OurSponsors/Sponsors";
import Service from "./components/Services/service";
import Statistics from "./components/StatisticsSection/Statistics";
import Testimonial from "./components/Testimonial/Testimonial";
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
      <Statistics />
      <Testimonial />
      <Sponsors />
      <Articles />
      <Gallery />
    </div>
  );
}
