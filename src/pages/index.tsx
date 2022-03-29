import * as React from "react";
import { NavBar } from "../components/NavBar";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { Skills } from "../components/SkillsSection";
// import { FeaturedProjects } from "../components/FeaturedProjects";
// import { FeatureCardRender } from "../components/FeatureCardRender";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import * as indexStyles from '../styles/Index/Index.module.css'

// markup
const IndexPage = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <Skills />
      {/* <FeatureCardRender/> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          marginTop: '200px',
        }}
      >
        <div
        className={indexStyles.gridTesting}
        >
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
