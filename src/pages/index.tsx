import * as React from "react";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import { Skills } from "../components/SkillsSection";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import * as indexStyles from '../styles/Index/Index.module.css'

// markup
const IndexPage = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Skills />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 150px)",
          flexWrap: "wrap",
          flexDirection: "row",
          maxHeight: 'calc(150vh - 150px)',
      
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
    </div>
  );
};

export default IndexPage;
