import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import Features from "@/components/Features/Features";
import WhyUs from "@/components/WhyUs/WhyUs";
import Customizable from "@/components/Customizable/Customizable";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <WhyUs />
      <Customizable />
      <Testimonials />
    </>
  );
}
