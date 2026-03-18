import HeroSection from "@/sections/HeroSection";
import InfoAndTopics from "@/sections/InfoAndTopics";
import MainLayout from "../components/layout/MainLayout";
import AboutSection from "@/sections/AboutSection";
import DestinationSection from "@/sections/DestinationSection";
import CategoriesAndReviewSection from "@/sections/CategoriesAndReviewSection";
import TourSection from "@/sections/TourSection";
export default function Home() {
  return (
    <MainLayout>
      <div>
        <HeroSection />
        <AboutSection />
        <DestinationSection />
        <TourSection />
        <CategoriesAndReviewSection />
        <InfoAndTopics />
      </div>
    </MainLayout>
  )
}
