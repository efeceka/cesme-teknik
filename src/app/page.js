import Advantages from "@/components/anasayfa/Advantages";
import Hero from "@/components/anasayfa/Hero";
import StepsAndLead from "@/components/anasayfa/Randevu";
import ServicesSection from "@/components/anasayfa/ServicesSection";
import Testimonials from "@/components/anasayfa/Testimonials";
import WhyBest from "@/components/anasayfa/WhyBest";
import WhyUs from "@/components/anasayfa/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <ServicesSection/>
   <WhyUs/>
   <StepsAndLead/>
   <WhyBest/>
   <Testimonials/>
   <Advantages/>
   </>
  );
}
