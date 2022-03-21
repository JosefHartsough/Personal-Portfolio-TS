import React from 'react'
import * as footerStyles from '../styles/Footer/Footer.module.css'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
export const Footer: React.FC = () => {
  return (
    <div className={footerStyles['container']}>
      <h1>Feel free to each out.</h1>
      <h3>Email</h3>
      <button
        type='button'
        onClick={(e) => {
          e.preventDefault()
          window.open('http://www.google.com', '_blank')
        }}
      >
        <HiOutlineMail size={30} />
      </button>
      <h3>Other Platforms</h3>
      <div className={footerStyles['platforms']}>
        <button
          type='button'
          onClick={(e) => {
            e.preventDefault()
            window.open('http://www.google.com', '_blank')
          }}
        >
          <AiFillGithub size={30} />
        </button>
        <button
          type='button'
          onClick={(e) => {
            e.preventDefault()
            window.open('http://www.google.com', '_blank')
          }}
        >
          <BsLinkedin size={30} />
        </button>
      </div>
      <h5 style={{marginTop: '100px'}}>Built by Josef Hartsough | 2022</h5>
    </div>
  )
}
