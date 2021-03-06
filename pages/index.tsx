import React, { useState } from 'react'
// Styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import style from '../styles/pages/Home.module.css'
// Icons
import { BsArrowRight } from 'react-icons/bs'
// Globe
import globeGif from '../images/globus.webp'
// Images
import instaIcon from '../images/insta_icon.svg'
import fbIcon from '../images/fb_icon.svg'
import linkedIcon from '../images/linked_icon.svg'
import tIcon from '../images/t_icon.svg'
import youTubeIcon from '../images/youtube_icon.svg'
// Components
import Footer from '../components/common/Footer'
import AboutVideo from '../components/AboutVideo'
import FormSection from '../components/FormSection'
import Preloader from '../components/common/Preloader'
import AnimLink from '../components/common/AnimLink'
import ProjectsSection from '../components/ProjectsSection'
import Title from '../components/common/Title'
// Packages
import cn from 'classnames'
import Link from 'next/link'
// Sliders
import ServicesSlider from 'react-slick'
// Types
import { ProjectType } from '../types'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
// Data
import { animated, services } from '../data'
import InfoCard from '../components/common/InfoCard'
// next
import Head from 'next/head'

const HomePage = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
  // Slider settings
  const sliderSettings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: false,
    centerMode: true,
    centerPadding: '30px'
  }

  const servicesItems = services.map(s => (
    <Link key={s.serviceTitle} href={`/service/${s.serviceUrl}`}>
      <a>
        <InfoCard
          logo={s.serviceLogo}
          title={s.serviceTitle}
          text={s.serviceDescription}
        />
      </a>
    </Link>
  ))

  if (!projects) {
    return <Preloader />
  }

  return (
    <>
      <Head>
        <title>Siteen • Homepage</title>
      </Head>
      <header className={style.main_header}>
        <div className='container'>
          <div className={style.main_offer}>
            <Title animate={false} label='Digital Agency' />
            <h1>Solutions for Digital Business.</h1>
            <p>
              We bring your business online and raise the income thanks to our
              wonderful team of professionals.
            </p>
            <div className={style.about_us_video_wrap}>
              <AboutVideo videoLabel='About Us' />
            </div>
          </div>
        </div>
      </header>
      <section id='services' className={style.our_services}>
        <div className='container'>
          <div className='v_cont'>
            <Title label='Our Services' title='We Do Everything.' gap={true} />
            <div className={style.services_items_wrap}>
              <div className={style.services_items}>{servicesItems}</div>
              <div className={style.services_slider_wrap}>
                <ServicesSlider {...sliderSettings}>
                  {servicesItems}
                </ServicesSlider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='cases' className={style.our_cases_outer}>
        <div className='v_cont'>
          <ProjectsSection projects={projects} />
        </div>
      </section>
      <section id='contact-us' className={style.form_section}>
        <div className='container'>
          <div className={style.form_section_wrap}>
            <div {...animated} className={style.globe_wrap}>
              <img src={globeGif} alt='globe' />
            </div>
            <FormSection />
          </div>
        </div>
      </section>
      <section className={style.we_are_pro}>
        <div className='container'>
          <div className={style.we_are_pro_wrap}>
            <div {...animated} className={style.we_are_pro_content}>
              <div className={style.we_are_pro_content_inner}>
                <Title
                  label='About Us'
                  title='We Are Experts In Our Field.'
                  margin={true}
                />
                <span {...animated} className={style.span}>
                  Our digital company of professionals has been developing
                  products for 3 years.
                </span>
                <p {...animated}>
                  We are a modern digital company that creates and develops your
                  projects. Our 3-year experience of developing various
                  web-projects grows only upwards thanks to the refresher
                  courses our employees attend annually. Since 2018 we have
                  completed more than 20 projects that are currently developing
                  and expanding successfully in their areas of specialization.
                  We do not chase the number of clients since it’s more exciting
                  to accomplish the work for a full due and to your delight.
                </p>
                <AnimLink to='/about' text='read more' />
              </div>
            </div>
            <div className={style.workflow}>
              <h2 {...animated} className={style.h2}>
                How We Work?
              </h2>
              <div className={style.workflow_items}>
                <WorkflowElement
                  index={'01.'}
                  title={'Acquaintance'}
                  text={
                    'The fundamental step in creating an effective web product. We synchronize with your vision and goals.'
                  }
                />
                <WorkflowElement
                  index={'02.'}
                  title={'Research'}
                  text={
                    'We research your niche and define the main points for development and promotion on the Internet.'
                  }
                />
                <WorkflowElement
                  index={'03.'}
                  title={'Project development'}
                  text={
                    'The most important stage in the process of creating your masterpiece.'
                  }
                />
                <WorkflowElement
                  index={'04.'}
                  title={'Launch and support'}
                  text={
                    'The final stage of the project. We launch your site and provide support throughout its existence.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='contacts' className={style.contacts_section}>
        <div className='container'>
          <div className='v_cont'>
            <div className={style.contacts_block}>
              <div className={style.contacts_block_credentials_wrap}>
                <Title label='Contacts' />
                <ul className={style.contacts_block_credentials}>
                  <li {...animated}>
                    <span>Address :</span>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://goo.gl/maps/jU1Pi4Vig4JsekTX9'
                    >
                      BC Gulliver, 29th floor, 1a Sportyvna sq, Kyiv, Ukraine
                    </a>
                  </li>
                  <li {...animated}>
                    <span>Phone :</span>
                    <a href='tel:0971630202'>+38 (097) 163 0202</a>
                  </li>
                  <li {...animated}>
                    <span>Email :</span>
                    <div className={style.mails_links}>
                      <a href='mailto:siteen.co@gmail.com'>
                        siteen.co@gmail.com
                      </a>
                      <a href='mailto:siteencareer@gmail.com'>
                        siteencareer@gmail.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.footer_links}>
                <span {...animated}>
                  Follow Us <BsArrowRight />
                </span>
                <ul {...animated} className={style.footer_links_elements}>
                  <li>
                    <a
                      href='https://www.instagram.com/siteen.co/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img src={instaIcon} alt='instaIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.facebook.com/siteen.co'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img src={fbIcon} alt='fbIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/siteen/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img src={linkedIcon} alt='linkedIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://t.me/siteen/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img src={tIcon} alt='tIcon' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.youtube.com/channel/UCATwpqig9rIT7u1dm4f7blQ'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <img src={youTubeIcon} alt='youTubeIcon' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

type WorkflowElementType = {
  index: string
  title: string
  text: string
}

const WorkflowElement = ({ index, title, text }: WorkflowElementType) => {
  const [isTextVisible, setTextVisible] = useState<boolean>(false)

  return (
    <div className={style.workflow_element}>
      <span
        {...animated}
        onClick={() => {
          setTextVisible(!isTextVisible)
        }}
      >
        {index}
      </span>
      <div className={style.workflow_text}>
        <div {...animated}>
          <h3
            className={
              index !== '01.'
                ? cn({ [style.opened]: isTextVisible })
                : cn({ [style.opened]: !isTextVisible })
            }
            onClick={() => {
              setTextVisible(!isTextVisible)
            }}
          >
            {title}
          </h3>
        </div>
        <div {...animated}>
          <p
            className={
              index !== '01.'
                ? cn({ [style.visible]: isTextVisible })
                : cn({ [style.visible]: !isTextVisible })
            }
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

type ProjectsResponseDataType = {
  response: Array<ProjectType>
}

type ProjectsResponseType = {
  message: string
  status: number
  code: number
  data: ProjectsResponseDataType
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}project`)
  const data: ProjectsResponseType = await res.json()
  const projects: Array<ProjectType> = data.data.response

  return {
    props: {
      projects
    }
  }
}

export default HomePage
