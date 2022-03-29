import React from "react";
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'
import * as styles from '../styles/FeatureCard/FeatureCard.module.css'

interface FeatureCardProps {
  project: any;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ project, index }) => {
  return (
      <div className={styles.featureAnim}>
    <div
      className={
        index !== 1
          ? styles.featureCard
          : `${styles.featureCard} ${styles.inverted}`
      }
    >
      <div className={styles.thumbCont}>
        <div className={styles.imgCont}>
          <a href={`/${project.slug}`}>
            <div className={styles.overlay}></div>
          </a>
          <img
            src={project.thumb}
            alt={project.title}
            width={450}
            height={236}
          />
        </div>
      </div>
      <div className={styles.contentCont}>
        <h5 className={styles.mono}>Featured Project</h5>
        <a href={`/${project.slug}`}>
          <a>
            <h2>{project.title}</h2>
          </a>
        </a>
        <p className={styles.descriptionCont}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((t) => (
            <span key={t} className={styles.mono}>
              {t}
            </span>
          ))}
        </div>
        <div className={styles.navigation}>
          <a href={`${project.source}`} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href={`${project.demo}`} target="_blank" rel="noreferrer">
            <RiExternalLinkFill />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};
