import logo from '@/assets/images/logo.png'
import './Header.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Header (){
  return(
    <header className="main-header">
      <header className="header-content">
        <div className="header-item logo-navbar">
          <img src={logo} alt="Cerâmica Argitécnica" className="logo" />

          <ul className="header-navbar">
            <li className="header-navbar-item"><a href="#">Catálogo</a></li>
            <li className="header-navbar-item"><a href="#">Sobre nós</a></li>
            <li className="header-navbar-item"><a href="#">Informações</a></li>
          </ul>
        </div>

        <div className="header-item contact">
          <button className="contact-button">
            Entrar em contato
            <ArrowForwardIcon className="arrow-icon" />
          </button>
        </div>
      </header>
    </header>
    
  )
}

export default Header