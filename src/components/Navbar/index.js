import {Link, withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Nav = () => {
  console.log('This is Nav bar !!')
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value

        const siteLogoUrl = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        const buttonImgUrl = !isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        const backgroundColor = !isDarkTheme
          ? 'nav_backfround_dark'
          : 'nav_backfround_light'

        return (
          <ul className={`row apart ${backgroundColor}`}>
            <li>
              <img className="left-icon" src={siteLogoUrl} alt="website logo" />
            </li>
            <li className="row center navigator-dark">
              <Link to="/" className="link">
                <p className="home-para">Home</p>
              </Link>
              <Link to="/about" className="link">
                <p className="about-para">About</p>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="but"
                onClick={toggleTheme}
                data-testid="theme"
              >
                <img className="right-icon" src={buttonImgUrl} alt="theme" />
              </button>
            </li>
          </ul>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Nav
