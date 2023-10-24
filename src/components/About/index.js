import Nav from '../Navbar'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = props => {
  console.log('This is .. ')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const commonBackGround = !isDarkTheme
          ? 'common-background-dark'
          : 'common-background-light'
        const aboutLogo = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png '
          : '  https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        const textColor = !isDarkTheme ? 'dark' : 'light'
        return (
          <div className={`common-background ${commonBackGround}`}>
            <Nav />
            <div className="row center align-center color common_text_color about-lower">
              <div className="col center align-center">
                <img className="about-icon" src={aboutLogo} alt="about" />
                <h1 className={textColor}>About</h1>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
