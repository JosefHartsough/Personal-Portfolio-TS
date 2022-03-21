import React from 'react'
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

import * as styles from '../styles/Projects/card.module.css'

interface CardProps {
  title: string
  children: React.ReactNode
}

export const Projects: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.head}>
          <div className={styles.folderClosed}>
            <AiOutlineFolder />
          </div>
          <div className={styles.folderOpen}>
            <AiOutlineFolderOpen />
          </div>
          <a>
            <h3 className={styles.cardTitle}>{title}</h3>
          </a>
        </div>
        <div className={styles.children}>
          <p>{children}</p>
        </div>
        <div className={styles.foot}>
          <a target='_blank' rel='noreferrer'>
            <AiFillGithub />
          </a>
          <a target='_blank' rel='noreferrer'>
            <RiExternalLinkFill />
          </a>
        </div>
      </div>
    </div>
  )
}
