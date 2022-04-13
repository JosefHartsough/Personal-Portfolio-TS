import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { reverse } from "dns";

interface FeatureCardProps {
  projectTitle: string;
  stack: Array<string>;
  details?: string;
  source?: string;
  demo?: string;
  thumbnail?: string;
  inverted? : boolean
  isReversed: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  projectTitle,
  details,
  stack,
  isReversed
}) => {
  const [detailsAnimation, setDetailsAnimation] = useState<boolean>(false);
  const [onHoverLink, setOnHoverLink] = useState<boolean>(false);

  useEffect(() => {
 console.log(isReversed)
  }, [])
  

  const Card = () => {
    return (
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '80px'
      }}
    >
      <div
        style={{
          width: "900px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1fr",
        }}
      >
          <StaticImage
            src="../images/feature_card_placeholder_pic.jpeg"
            alt="feature_card_image"
            width={400}
            height={226}
          />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                margin: "1px",
                padding: '5px',
                color: "#4682b4",
                fontFamily: "Roboto Mono, monospace",
                letterSpacing: '-.5px',
                fontSize: '.95rem',
                fontWeight: '500'
              }}
            >
              Featured Project
            </h2>
            <h2 style={{ margin: "5px", fontFamily: 'Roboto,sans-serif', letterSpacing: '.5px', }}>{projectTitle}</h2>
            <div
              style={{
                position: "relative",
                right: detailsAnimation ? "50px" : "30px",
                width: "400px",
                borderRadius: "5px",
                height: "70px",
                zIndex: "2",
                backgroundColor: "#1b1b1b",
                color: "white",
                transition: ".2s",
                padding: '10px 10px'
              }}
              onMouseEnter={() => setDetailsAnimation(true)}
              onMouseLeave={() => setDetailsAnimation(false)}
            >
              <p style={{ textAlign: 'right'}}>
              {details}
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: "60px",
              }}
            >
              {stack.map((item) => (
                <h5
                  style={{
                    rowGap: "15px",
                    fontFamily: "Roboto Mono,monospace",
                    fontWeight: "2",
                  }}
                >
                  {item}
                </h5>
              ))}
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", padding: "5px" }}
            >
              <a
                onMouseEnter={() => setOnHoverLink(true)}
                onMouseLeave={() => setOnHoverLink(false)}
                style={{ color: onHoverLink ? 'steelblue' : 'black' }}
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
    </div>
    )
  }

  const ReversedCard = () => {
    return (
      <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: '80px'
      }}
    >
      <div
        style={{
          width: "900px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1fr",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                margin: "1px",
                padding: '5px',
                color: "#4682b4",
                fontFamily: "Roboto Mono, monospace",
                letterSpacing: '-.5px',
                fontSize: '.95rem',
                fontWeight: '500'
              }}
            >
              Featured Project
            </h2>
            <h2 style={{ margin: "5px", fontFamily: 'Roboto,sans-serif', letterSpacing: '.5px', }}>{projectTitle}</h2>
            <div
              style={{
                position: "relative",
                right: detailsAnimation ? "-50px" : "-30px",
                width: "400px",
                borderRadius: "5px",
                height: "70px",
                zIndex: "2",
                backgroundColor: "#1b1b1b",
                color: "white",
                transition: ".2s",
                padding: '10px 10px'
              }}
              onMouseEnter={() => setDetailsAnimation(true)}
              onMouseLeave={() => setDetailsAnimation(false)}
            >
              <p style={{ textAlign: 'right'}}>
              {details}
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                gap: "60px",
              }}
            >
              {stack.map((item) => (
                <h5
                  style={{
                    rowGap: "15px",
                    fontFamily: "Roboto Mono,monospace",
                    fontWeight: "2",
                  }}
                >
                  {item}
                </h5>
              ))}
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", padding: "5px" }}
            >
              <a
                onMouseEnter={() => setOnHoverLink(true)}
                onMouseLeave={() => setOnHoverLink(false)}
                style={{ color: onHoverLink ? 'steelblue' : 'black' }}
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
          <StaticImage
            src="../images/feature_card_placeholder_pic.jpeg"
            alt="feature_card_image"
            width={400}
            height={226}
          />
      </div>
    </div>
    )
  }

  if(isReversed === true){
    return <ReversedCard />
  }
  else {
    return <Card />
  }


  
};

export default FeatureCard;
