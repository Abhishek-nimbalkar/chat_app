
import logo from "assets/logo/Logo.png"
import { ContactUsButton,HeaderStyle,HeaderLogo } from "styles/components/header";

const Header = () => {
  return (
        <HeaderStyle>
          <HeaderLogo>
            <img src={logo} alt="IMG" />
          </HeaderLogo>
          <ContactUsButton>Contact Us</ContactUsButton>
        </HeaderStyle>
  )
}

export default Header;