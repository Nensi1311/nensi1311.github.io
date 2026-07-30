import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import NeuralBackground from "@/components/portfolio/NeuralBackground";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import AchievementsSection from "@/components/portfolio/AchievementSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-white">
      <NeuralBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}