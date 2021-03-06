import React from 'react'
import Button from '../components/formElements/Button'
import style from '../styles/pages/NotFoundPage.module.css'
import cowLight from '../images/cow_light.svg'
import cowElement from '../images/cow_element.svg'
import Link from 'next/link'
import Head from 'next/head'
import { animated } from '../data'

const NotFoundPage = () => (
  <>
    <Head>
      <title>Siteen • 404</title>
    </Head>
    <header className={style.not_found_header}>
      <div className='container'>
        <div {...animated} className={style.main_offer}>
          <h1>404</h1>
          <p>Oops ... something went wrong</p>
          <span className={style.not_found_span}>
            Page not found. Try to go back and repeat the request
          </span>
          <Link href='/'>
            <a>
              <Button animate={false}>To Homepage</Button>
            </a>
          </Link>
        </div>
        <div className={style.cow_block}>
          <img className={style.cow_light} src={cowLight} alt='cowLight' />
          <img
            className={style.cow_element}
            src={cowElement}
            alt='cowElement'
          />
        </div>
      </div>
    </header>
  </>
)

export default NotFoundPage
