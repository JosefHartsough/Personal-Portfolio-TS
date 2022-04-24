import React, { useState } from "react";
import FeatureCard from "./FeatureCard";

import featuresData from "../data/projects.json";

interface FeatureCardLayoutProps {
  projectTitle: string;
  details: string;
  stack: string[];
  source: string;
  demo: string;
  thumb: string;
}

export const FeatureCardLayout: React.FC = () => {
  // Change to correct type
  const [features, setFeatures] =
    useState<FeatureCardLayoutProps[]>(featuresData);

  const FeatureCardRender = features.map((item, index) => {
    if (index === 1) {
      return (
        <FeatureCard
          projectTitle={item.projectTitle}
          details={item.details}
          stack={item.stack}
          isReversed={true}
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
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Featured</h1>
      {FeatureCardRender}
    </div>
  );
};
