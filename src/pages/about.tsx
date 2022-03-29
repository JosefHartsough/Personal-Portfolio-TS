import React from "react";
import NavigationBar from "../components/NavigationBar";

const AboutMe: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(80vh)",
          flexDirection: "column",
        }}
      >
        <h1 style={{ position: "relative", right: "400px" }}>About me</h1>
        <div>
          <h1>Background</h1>
          <body>
            My name is Josef Hartsough. Come back and fill this in with a bunch
            of super cool and awesome things about myself.
          </body>
          <h1>Education</h1>
          <body>
            Bachelor of Science in Computer Science, Winter 2021<br></br>
            Grand Valley State University, Allendale, Michigan<br></br>
            Deans List, 3.4GPA.
          </body>
          <h1>Experience</h1>
          <body>
              Come back and fill this in with all my super cool experience as a developer.
          </body>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
