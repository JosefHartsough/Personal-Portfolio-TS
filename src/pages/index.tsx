import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { Skills } from "../components/SkillsSection";
import FeatureCard from "../components/FeatureCard";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import * as indexStyles from "../styles/Index/Index.module.css";
import * as skillsStyles from "../styles/Skills/SkillsSection.module.css";
import featuresData from "../data/projects.json";

// markup
const IndexPage = () => {
  const [features, setFeatures] = useState<any>(featuresData);
  const FeatureCardRender = features.map((item, index) => {
    if (index === 1) {
      return (
        <FeatureCard
          projectTitle={item.projectTitle}
          details={item.details}
          stack={item.stack}
          isReversed={false}
        />
      );
    } else {
      return (
        <FeatureCard
          projectTitle={item.projectTitle}
          details={item.details}
          stack={item.stack}
          isReversed={false}
        />
      );
    }
  });


  return (
    <>
      <NavigationBar />
      <Header />
      <h1 style={{ textAlign: "center" }}>Technology</h1>
      <Skills />
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Featured</h1>
        {FeatureCardRender}
      </div>
      <h1 style={{ textAlign: "center" }}>Project Collection</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "40px",
          // maxWidth: '80%',
          margin: "auto",
        }}
      >
        <div className={indexStyles.gridTesting}>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
          <Projects title="Warrior Welding Projects">
            The #1 Independent news service in the world, battling globalism and
            promoting a pro-human future worldwide. Infowars is Tomorrow's News
            Today.
          </Projects>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
