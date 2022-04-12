import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { Skills } from "../components/SkillsSection";
import FeatureCard from "../components/FeatureCard";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import * as indexStyles from "../styles/Index/Index.module.css";
import featuresData from "../data/projects.json";

// markup
const IndexPage = () => {
  const [features, setFeatures] = useState<any>(featuresData);

  return (
    <>
      <NavigationBar />
      <Header />
      <h1 style={{ marginLeft: '220px'}}>Technology</h1>
      <Skills />
      <div style={{
        marginTop: '100px'
      }}>
        <h1 style={{ marginLeft: '226px'}}>Featured</h1>
      {features.map((item) => (
        <div>
          <br/>
        <FeatureCard
          projectTitle={item.projectTitle}
          details={item.details}
          stack={item.stack}
        />
        <br/>
        </div>
      ))}
      </div>
      <h1 style={{ marginLeft: '180px'}}>Project Collection</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: "40px",
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
