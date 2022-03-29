import React, {useState} from "react";
import { FeatureCard } from "./FeatureCard";
import * as styles from '../styles/FeatureCard/FeatureCardRender.module.css'

const projectData = [{
    "title": "Chatter",
    "slug": "chatter",
    "description": "Capstone - An automated chat interface that offers help with frequently asked questions, ratings, and feedback.",
    "writing": {
        "process": "This was the capstone project for my final course before attaining my AS Degree in Web Programming. The task of the project was to create a solution for a company in need of a piece of software based in the web browser. I chose to build this application for the the specific purpose of reducing dining location FAQs but it quickly expanded with features and broadened in scope as the SDLC progressed. The chat lives in the bottom right-hand side of the browser like most other chat interfaces seen on the web.",
        "processSub": "The success of this project stems from the carefully coded architecture as well as the beautifully implemented animations. During the build phase of the application, I let my creativity run wild like I've never done in previous projects. Framer motion was used for all of the animations and I cannot say enough how intuitive and powerful this library is to work with.",
        "conclusion": [
            "Exercised use of high-level animation concepts within Framer-motion",
            "Built personal best application state management architecture",
            "Became more comfortable doing application testing with Jest"
        ]
    },
    "stack": [
        "TypeScript",
        "React",
        "Framer-motion",
        "Storybook",
        "Netlify"
    ],
    "tags": [
        "TypeScript",
        "React",
        "2022"
    ],
    "source": "https://github.com/capriok/capstone",
    "demo": "https://chatter.kylecaprio.dev",
    "thumb": "/images/CAPSTONE-SHOWCASE.jpg",
    "images": [
        "/images/CAPSTONE-SHOWCASE.jpg",
        "/images/CAPSTONE-GREETING.jpg",
        "/images/CAPSTONE-NAV.jpg",
        "/images/CAPSTONE-FAQ.jpg",
        "/images/CAPSTONE-RATINGS.jpg",
        "/images/CAPSTONE-FEEDBACK.jpg"
    ],
    "resources": [
        "https://www.framer.com/docs",
        "https://storybook.js.org/docs",
        "https://netlify.com"
    ]
}]


export const FeatureCardRender: React.FC = () => {

    const [features, setFeatures] = useState(projectData)

  return (
    <div className={styles.featureMap}>
      <h1 className={styles.sectionTitle}>Featured</h1>
      {features.map((project, i: number) => (
        <FeatureCard key={i} project={project} index={i} />
      ))}
    </div>
  );
};
