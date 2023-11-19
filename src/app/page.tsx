import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from "@/components/Certifications";
import Blogs from '@/components/Blogs';
import Publications from "@/components/Publications";
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="mt-[calc(16px+56px)] h-[calc(100vh-72px)]">
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
        <Skills/>
        <Certifications/>
        <Blogs/>
        <Publications/>
        <Footer/>
      </main>
    </>
  );
}
