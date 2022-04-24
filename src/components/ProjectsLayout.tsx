import React from "react";
import { Projects } from "../components/Projects";
import * as indexStyles from "../styles/Index/Index.module.css";

export const ProjectsLayout: React.FC = () => {
  return (
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
  );
};
