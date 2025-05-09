import Articles from "../app/components/ArticlesSection/articles";
import BeautyGuide from "../app/components/BeautyGuide/beautyguide";
import CTA from "../app/components/CTASection/cta";
import Gallery from "../app/components/GallerySection/gallery";
import Sponsors from "../app/components/OurSponsors/Sponsors";
import Service from "../app/components/Services/service";
import Statistics from "../app/components/StatisticsSection/Statistics";
import Testimonial from "../app/components/Testimonial/Testimonial";
import Transformation from "../app/components/Transformation/transformation";
import HeroSection from "./components/HeroSection/HeroSection";

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
