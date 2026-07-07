import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { OrderSection } from "@/components/OrderSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { LocationFooter } from "@/components/LocationFooter";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <OrderSection />
        <ReviewsSection />
      </main>
      <LocationFooter />
    </div>
  );
}
