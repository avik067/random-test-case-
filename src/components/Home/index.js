import Nav from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = props => {
  console.log('This is .. ')

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const commonBackGround = !isDarkTheme
          ? 'common-background-dark'
          : 'common-background-light'
        const homeLogo = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        const textColor = !isDarkTheme ? 'dark' : 'light'
        return (
          <div className={`common-background ${commonBackGround}`}>
            <Nav />
            <div className="row center align-center color common_text_color home-lower">
              <div className="col center align-center">
                <img className="home-icon" src={homeLogo} alt="home" />
                <h1 className={textColor}>Home</h1>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
