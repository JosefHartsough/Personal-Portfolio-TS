
import React, { useState, useEffect } from 'react'
import * as styles from '../styles/Skills/SkillsSection.module.css'

import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiJava,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSocketdotio,
  SiMysql,
  SiGraphql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMariadbfoundation,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGithub,
  SiNetlify,
  SiNpm,
  SiHeroku,
  SiVercel
} from 'react-icons/si'
import { DiSass, DiDotnet, DiPostgresql } from 'react-icons/di'
import { RiGatsbyLine, RiHtml5Line, RiCss3Fill } from 'react-icons/ri'
import { VscDatabase } from 'react-icons/vsc'
import { GrMysql } from 'react-icons/gr'
import { FaPhp } from 'react-icons/fa'
import { IOType } from 'child_process'


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

//   useEffect(() => {
//     onTabChange()
//   }, [tab])
  

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
          <TabContent Icon={SiCsharp} name='C Sharp' />
          <TabContent Icon={SiJava} name='Java' />
          <TabContent Icon={FaPhp} name='PHP' /> 
        </TabPane>
        <TabPane tabIndex='2'>
          <TabContent Icon={SiReact} name='React' />
          <TabContent Icon={SiNextdotjs} name='Next' />
          <TabContent Icon={RiGatsbyLine} name='Gatsby' />
          <TabContent Icon={RiHtml5Line} name='HTML' />
          <TabContent Icon={RiCss3Fill} name='CSS' />
          <TabContent Icon={DiSass} name='SASS' />
        </TabPane>
        <TabPane tabIndex='3'>
          <TabContent Icon={DiDotnet} name='ASP.NET' />
          <TabContent Icon={SiNodedotjs} name='Express.js' />
          <TabContent Icon={GrMysql} name='SQL' />
          <TabContent Icon={SiGraphql} name='GraphQL' />
          <TabContent Icon={SiSocketdotio} name='Socket.io' />
        </TabPane>
        <TabPane tabIndex='4'>
          <TabContent Icon={DiPostgresql} name='PostgreSQL' />
        </TabPane>
        <TabPane tabIndex='5'>
          <TabContent Icon={SiAmazonaws} name='AWS' />
          <TabContent Icon={SiMicrosoftazure} name='Azure' />
          <TabContent Icon={SiGithub} name='Github' />
          <TabContent Icon={SiNpm} name='NPM' />
          <TabContent Icon={SiVercel} name='Vercel' />
          <TabContent Icon={SiNetlify} name='Netlify' />
        </TabPane>
      </div>
    </div>
  )
}
