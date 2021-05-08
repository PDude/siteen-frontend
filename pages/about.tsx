import AboutVideo from '../components/AboutVideo'
import style from '../styles/About.module.sass'
// Frontend icons
import jsIcon from '../images/brands/javascript.svg'
import reactIcon from '../images/brands/react.svg'
import reduxIcon from '../images/brands/redux.svg'
import nextIcon from '../images/brands/next_js.svg'
import vueIcon from '../images/brands/vue.svg'
import angularIcon from '../images/brands/angular.svg'
import tsIcon from '../images/brands/typescript.svg'
import webpackIcon from '../images/brands/webpack.svg'
import htmlIcon from '../images/brands/html.svg'
import cssIcon from '../images/brands/css.svg'
import sassIcon from '../images/brands/sass.svg'
// Backend icons
import nodeJs from '../images/brands/node_js.svg'
import expressIcon from '../images/brands/express.svg'
import mySqlIcon from '../images/brands/mysql.svg'
import nestIcon from '../images/brands/nest_js.svg'
import nginxIcon from '../images/brands/nginx.svg'
import postgresqlIcon from '../images/brands/postgresql.svg'
import sequelizeIcon from '../images/brands/sequelize.svg'
// Art icons
import figmaIcon from '../images/brands/figma.svg'
import aeIcon from '../images/brands/after_effects.svg'
import blenderIcon from '../images/brands/blender.svg'
import cinema4d from '../images/brands/cinema_4d.svg'
import davinci from '../images/brands/davinci.svg'
import photoshop from '../images/brands/photoshop.svg'
import xd from '../images/brands/xd.svg'
// Slider
import TeamSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Team members
import member1 from '../images/member_1.jpg'
import member2 from '../images/member_2.jpg'
import member3 from '../images/member_3.jpg'
import member4 from '../images/member_4.jpg'
// Arows
import arrowBack from '../images/arrow_team_back.svg'
import arrowNext from '../images/arrow_team_next.svg'
import { Component } from 'react'
import FormSection from '../components/FormSection'
import Footer from '../components/Footer'
// Social links
import instaIcon from '../images/insta_icon.svg'
import fbIcon from '../images/fb_icon.svg'
import linkedIcon from '../images/linked_icon.svg'
import tIcon from '../images/t_icon.svg'
import youTubeIcon from '../images/youtube_icon.svg'

const about = () => {
  return (
    <>
      <header className={style.about_header}>
        <div className='container'>
          <div className={style.about_offer}>
            <div className={style.about_offer_text}>
              <span className='title_label'>About us</span>
              <h1>We are professionals in our field.</h1>
              <p>
                Our digital company develops projects and has been on the market
                for 15 years.
              </p>
              <span className={style.offer_description}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus.
              </span>
            </div>
            <div className={style.about_video_wrap}>
              <AboutVideo videoLabel='Play' />
            </div>
          </div>
        </div>
      </header>
      <section className={style.technologies_section}>
        <div className='container'>
          <div className={style.frontend_and_description}>
            <div className={style.frontend}>
              <h3>FrontEnd</h3>
              <div className={style.frontend_icons}>
                <a href='/'>
                  <img src={jsIcon} alt='jsIcon' />
                </a>
                <a href='/'>
                  <img src={reactIcon} alt='reactIcon' />
                </a>
                <a href='/'>
                  <img src={reduxIcon} alt='reduxIcon' />
                </a>
                <a href='/' className={style.next_icon}>
                  <img src={nextIcon} alt='nextIcon' />
                </a>
                <a href='/'>
                  <img src={vueIcon} alt='vueIcon' />
                </a>
                <a href='/'>
                  <img src={angularIcon} alt='angularIcon' />
                </a>
                <a href='/'>
                  <img src={tsIcon} alt='tsIcon' />
                </a>
                <a href='/'>
                  <img src={webpackIcon} alt='webpackIcon' />
                </a>
                <a href='/'>
                  <img src={htmlIcon} alt='htmlIcon' />
                </a>
                <a href='/' className={style.cssIcon}>
                  <img src={cssIcon} alt='cssIcon' />
                </a>
                <a href='/'>
                  <img src={sassIcon} alt='sassIcon' />
                </a>
              </div>
            </div>
            <div className={style.description_tech}>
              <span className='title_label'>Expirience</span>
              <h1>The technologies we use.</h1>
              <p>
                Our digital company develops projects and has been on the market
                for 15 years.
              </p>
            </div>
          </div>
          <div className={style.backend_and_art}>
            <div className={style.backend}>
              <h3>BackEnd</h3>
              <div className={style.backend_icons}>
                <a href='/'>
                  <img src={nodeJs} alt='nodeJs' />
                </a>
                <a href='/' className={style.expressIcon}>
                  <img src={expressIcon} alt='expressIcon' />
                </a>
                <a href='/'>
                  <img src={mySqlIcon} alt='mySqlIcon' />
                </a>
                <a href='/'>
                  <img src={nestIcon} alt='nestIcon' />
                </a>
                <a href='/'>
                  <img src={nginxIcon} alt='nginxIcon' />
                </a>
                <a href='/'>
                  <img src={postgresqlIcon} alt='postgresqlIcon' />
                </a>
                <a href='/'>
                  <img src={sequelizeIcon} alt='sequelize' />
                </a>
              </div>
            </div>
            <div className={style.art}>
              <h3>Art & Design</h3>
              <div className={style.art_icons}>
                <a href='/' className={style.figmaIcon}>
                  <img src={figmaIcon} alt='figmaIcon' />
                </a>
                <a href='/'>
                  <img src={aeIcon} alt='aeIcon' />
                </a>
                <a href='/'>
                  <img src={blenderIcon} alt='blenderIcon' />
                </a>
                <a href='/'>
                  <img src={cinema4d} alt='cinema4d' />
                </a>
                <a href='/'>
                  <img src={davinci} alt='davinci' />
                </a>
                <a href='/'>
                  <img src={photoshop} alt='photoshop' />
                </a>
                <a href='/'>
                  <img src={xd} alt='xd' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreviousNextMethodsTeamSection />
      <section className={style.form_section}>
        <div className='container'>
          <div className={style.form_wrap_outter}>
            <div className={style.form_wrap_inner}>
              <FormSection />
            </div>
          </div>
        </div>
      </section>
      <section className={style.contact_section}>
        <div className='container'>
          <div className={style.contact_section_wrap}>
            <div className={style.contact_block}>
              <span className='title_label'>Contact Us</span>
              <h2>Or contact us in a way convenient for you.</h2>
              <div className={style.credentials_block}>
                <div className={style.eadress}>
                  <p>Address :</p>
                  <a href='#'>230, Kulparkivska str. Lviv, Ukraine, 79031</a>
                </div>
                <div className={style.phone}>
                  <p>Phone :</p>
                  <a href='#'>+38 (097) 163 0202</a>
                </div>
                <div className={style.email}>
                  <p>Email :</p>
                  <div className={style.links}>
                    <a href='#'>siteen.co@gmail.com</a>
                    <a href='#'>siteencareer@gmail.com</a>
                  </div>
                </div>
              </div>
              <ul className={style.footer_links_elements}>
                <li>
                  <a href='#'>
                    <img src={instaIcon} alt='instaIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={fbIcon} alt='fbIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={linkedIcon} alt='linkedIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={tIcon} alt='tIcon' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img src={youTubeIcon} alt='youTubeIcon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className={style.footer_wrap}>
        <Footer />
      </div>
    </>
  )
}

class PreviousNextMethodsTeamSection extends Component {
  slider: any
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  previous() {
    this.slider.slickPrev()
  }
  next() {
    this.slider.slickNext()
  }

  render() {
    const sliderSettings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      speed: 500,
      infinite: false
      // centerPadding: '30px'
    }

    return (
      <section className={style.team_section}>
        <div className='container'>
          <span className='title_label'>Our Exress</span>
          <h1>Team - the main thing.</h1>
          <div className={style.team_desk_and_arrows}>
            <p>
              Our digital company develops projects and has been on the market
              for 15 years.
            </p>
            <div className={style.arrows}>
              <button onClick={this.previous} className={style.team_back_arrow}>
                Back <img src={arrowBack} alt='<-' />
              </button>
              <button onClick={this.next} className={style.team_next_arrow}>
                Next <img src={arrowNext} alt='->' />
              </button>
            </div>
          </div>
          <div className={`${style.team_slider} team_slider_global`}>
            <TeamSlider ref={(c) => (this.slider = c)} {...sliderSettings}>
              <TeamSliderItem
                name={'Paul Dudich'}
                position={'Web-Developer'}
                imgPath={member1}
              />
              <TeamSliderItem
                name={'Paul Dudich'}
                position={'Web-Developer'}
                imgPath={member2}
              />
              <TeamSliderItem
                name={'Paul Dudich'}
                position={'Web-Developer'}
                imgPath={member3}
              />
              <TeamSliderItem
                name={'Paul Dudich'}
                position={'Web-Developer'}
                imgPath={member4}
              />
              <TeamSliderItem
                name={'Paul Dudich'}
                position={'Web-Developer'}
                imgPath={member1}
              />
            </TeamSlider>
          </div>
        </div>
      </section>
    )
  }
}

const TeamSliderItem = ({ name, position, imgPath }) => {
  return (
    <div
      className={style.slider_item}
      style={{ backgroundImage: `url(${imgPath})` }}>
      <div className={style.slider_item_inner}>
        <p>{name}</p>
        <span>{position}</span>
      </div>
    </div>
  )
}

export default about