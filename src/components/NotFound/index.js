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
        const notfoundLogo = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
        const textColor = !isDarkTheme ? 'dark' : 'light'
        return (
          <div className={`common-background ${commonBackGround}`}>
            <Nav />
            <div className="row center align-center color common_text_color notfound-lower">
              <div className="col center align-center">
                <img
                  className="notfound-icon"
                  src={notfoundLogo}
                  alt="not found"
                />
                <h1 className={textColor}>Lost Your Way</h1>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Home
