import React from "react";

export const FeaturedProjects: React.FC = () => {
  return (
    <div
    className="featureProjectsContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 150px)",
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <h1>Featured</h1>
        <div style={{ border: '2px solid', width: '800px', height: '30%' }}>
        Featured Projects placeholder
        </div>
        <div style={{ border: '2px solid', width: '800px', height: '30%' }}>
        Featured Projects placeholder
        </div>
        <div style={{ border: '2px solid', width: '800px', height: '30%' }}>
        Featured Projects placeholder
        </div>
    </div>
  );
};
