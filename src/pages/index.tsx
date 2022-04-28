import React from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { Skills } from "../components/SkillsSection";
import { FeatureCardLayout } from "../components/FeatureCardLayout";
import { ProjectsLayout } from "../components/ProjectsLayout";
import { Footer } from "../components/Footer";

const IndexPage = () => {

  return (
    <>
      <NavigationBar />
      <Header />
      <Skills />
      <FeatureCardLayout />
      <ProjectsLayout />
      <Footer />
    </>
  );
};

export default IndexPage;
