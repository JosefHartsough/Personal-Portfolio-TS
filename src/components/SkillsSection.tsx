
import React, { useState, useEffect } from 'react'
import * as styles from '../styles/Skills/SkillsSection.module.css'

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiJava,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSocketdotio,
  SiGraphql,
  SiAmazonaws,
  SiGithub,
  SiNetlify,
  SiNpm,
  SiFlask,
  SiVercel,
  SiDjango,
  SiDocker,
  SiPostgresql
} from 'react-icons/si'
import { DiDotnet, DiPostgresql } from 'react-icons/di'
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from 'react-icons/ri'
import { GrMysql } from 'react-icons/gr'


interface TabProps {
  children?: React.ReactNode
  tabIndex: string
}

interface IconProps {
  Icon: any
  name: string
}

export const Skills: React.FC = () => {
  const [tab, setTab] = useState<object>({1: true})

  const Tab = ({ children, tabIndex }: TabProps) => (
    <li
      className={tab[tabIndex] ? styles.activeTab : ''}
      onClick={() =>
        !Object.keys(tab).includes(tabIndex) && setTab({ [tabIndex]: true })
      }
    >
      {children}
    </li>
  )

  const TabContent = ({ Icon, name }: IconProps) => (
    <li>
      <p>
        <Icon />
      </p>
      <p>{name}</p>
    </li>
  )

  const TabPane = ({ children, tabIndex }: TabProps) => (
    <>
      {tab[tabIndex]  && (
        <section className={styles.section}>
          <ul>{children}</ul>
        </section>
      )}
      </>
  )

  return (
    <div className={styles.skillsSection}>
      <h1>Technology</h1>
      <div className={styles.skillsCont}>
        <ul className={styles.tabs}>
          <Tab tabIndex='1'>
            <span>Programming </span>
            <span>Languages</span>
          </Tab>
          <Tab tabIndex='2'>
            <span>Front-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab tabIndex='3'>
            <span>Back-end </span>
            <span>Technologies</span>
          </Tab>
          <Tab tabIndex='4'>
            <span>Database </span>
            <span>Technologies</span>
          </Tab>
          <Tab tabIndex='5'>
            <span>Storage and</span>
            <span>Deployment</span>
          </Tab>
        </ul>
        <TabPane tabIndex='1'>
          <TabContent Icon={SiJavascript} name='JavaScript' />
          <TabContent Icon={SiTypescript} name='TypeScript' />
          <TabContent Icon={SiPython} name='Python' />
          <TabContent Icon={SiJava} name='Java' />
        </TabPane>
        <TabPane tabIndex='2'>
          <TabContent Icon={SiReact} name='React' />
          <TabContent Icon={SiDjango} name='Django' />
          <TabContent Icon={SiNextdotjs} name='Next' />
          <TabContent Icon={RiGatsbyLine} name='Gatsby' />
          <TabContent Icon={RiHtml5Line} name='HTML' />
          <TabContent Icon={RiCss3Fill} name='CSS' />
        </TabPane>
        <TabPane tabIndex='3'>
          <TabContent Icon={SiNodedotjs} name='Express.js' />
          <TabContent Icon={SiFlask} name='Flask' />
          <TabContent Icon={SiGraphql} name='GraphQL' />
          <TabContent Icon={SiSocketdotio} name='Socket.io' />
        </TabPane>
        <TabPane tabIndex='4'>
          <TabContent Icon={DiPostgresql} name='PostgreSQL' />
        </TabPane>
        <TabPane tabIndex='5'>
          <TabContent Icon={SiAmazonaws} name='AWS' />
          <TabContent Icon={SiGithub} name='Github' />
          <TabContent Icon={SiNpm} name='NPM' />
          <TabContent Icon={SiDocker} name='Docker' />
          <TabContent Icon={SiNetlify} name='Netlify' />
        </TabPane>
      </div>
    </div>
  )
}
