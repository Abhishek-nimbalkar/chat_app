
import logo from "assets/logo/Logo.png"
import { ContactUsButton,HeaderStyle } from "styles/components/header";

const Header = () => {
  return (
        <HeaderStyle>
            <img src={logo} alt="IMG" />
            <ContactUsButton>Contact Us</ContactUsButton>
        </HeaderStyle>
  )
}

export default Header;