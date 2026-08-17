import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <Courses />
        <Teachers />
        <Testimonials />
        <Newsletter />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
