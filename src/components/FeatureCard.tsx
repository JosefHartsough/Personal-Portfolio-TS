import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import * as cardStyles from "../styles/FeatureCard/FeatureCard.module.css";
import projectPlaceholderImage from "../images/feature_card_placeholder_pic.jpeg";

interface FeatureCardProps {
  projectTitle: string;
  stack: Array<string>;
  details?: string;
  source?: string;
  demo?: string;
  thumbnail?: string;
  inverted?: boolean;
  isReversed: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  projectTitle,
  details,
  stack,
  isReversed,
}) => {
  const [detailsAnimation, setDetailsAnimation] = useState<boolean>(false);
  const [onHoverLink, setOnHoverLink] = useState<boolean>(false);

  const Card = () => {
    return (
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.card}>
          <img
            className={cardStyles.cardProjectImage}
            src={projectPlaceholderImage}
          />
          <div className={cardStyles.cardInfo}>
            <h2 className={cardStyles.cardFeaturedProjectHeader}>
              Featured Project
            </h2>
            <h2 className={cardStyles.cardInfoProjectTitle}>{projectTitle}</h2>
            <div
              style={{
                position: "relative",
                right: detailsAnimation ? "50px" : "30px",
                width: "500px",
                borderRadius: "5px",
                height: "70px",
                zIndex: "2",
                backgroundColor: "#1b1b1b",
                color: "white",
                transition: ".2s",
                padding: "10px 10px",
              }}
              onMouseEnter={() => setDetailsAnimation(true)}
              onMouseLeave={() => setDetailsAnimation(false)}
            >
              <p style={{ textAlign: "right" }}>{details}</p>
            </div>
            <div className={cardStyles.cardInfoTechStack}>
              {stack.map((item) => (
                <h5 className={cardStyles.cardInfoTechStackText}>{item}</h5>
              ))}
            </div>
            <div className={cardStyles.cardInfoLinks}>
              <a
                onMouseEnter={() => setOnHoverLink(true)}
                onMouseLeave={() => setOnHoverLink(false)}
                style={{ color: onHoverLink ? "steelblue" : "black" }}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={30} style={{ marginRight: "20px" }} />
              </a>
              <a target="_blank" rel="noreferrer">
                <BsBoxArrowUpRight size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReversedCard = () => {
    return (
      <div className={cardStyles.cardContainer}>
        <div className={cardStyles.card}>
          <div>
            <div className={cardStyles.cardInfoReversed}>
              <h2 className={cardStyles.cardFeaturedProjectHeader}>
                Featured Project
              </h2>
              <h2 className={cardStyles.cardInfoProjectTitle}>
                {projectTitle}
              </h2>
              <div
                style={{
                  position: "relative",
                  left: detailsAnimation ? "50px" : "30px",
                  width: "500px",
                  borderRadius: "5px",
                  height: "70px",
                  zIndex: "2",
                  backgroundColor: "#1b1b1b",
                  color: "white",
                  transition: ".2s",
                  padding: "10px 10px",
                }}
                onMouseEnter={() => setDetailsAnimation(true)}
                onMouseLeave={() => setDetailsAnimation(false)}
              >
                <p style={{ textAlign: "right" }}>{details}</p>
              </div>
              <div className={cardStyles.cardInfoTechStack}>
                {stack.map((item) => (
                  <h5 className={cardStyles.cardInfoTechStackText}>{item}</h5>
                ))}
              </div>
              <div className={cardStyles.cardInfoLinks}>
                <a
                  onMouseEnter={() => setOnHoverLink(true)}
                  onMouseLeave={() => setOnHoverLink(false)}
                  style={{ color: onHoverLink ? "steelblue" : "black" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={30} style={{ marginRight: "20px" }} />
                </a>
                <a target="_blank" rel="noreferrer">
                  <BsBoxArrowUpRight size={30} />
                </a>
              </div>
            </div>
          </div>
          <img
            className={cardStyles.cardProjectImage}
            src={projectPlaceholderImage}
          />
        </div>
      </div>
    );
  };

  if (isReversed === true) {
    return <ReversedCard />;
  } else {
    return <Card />;
  }
};

export default FeatureCard;
