
import About from "@/component/About";
import ContactSection from "@/component/Contact";
import EducationSection from "@/component/Education";
import ExperienceSection from "@/component/Experience";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import HomeSection from "@/component/HomeSection";
import ProjectSection from "@/component/Project";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HomeSection />
        <ExperienceSection />
        <About/>
        <ProjectSection/>
       <EducationSection />
       <ContactSection />
      </main>
         <Footer/>
    </>
  );
}
