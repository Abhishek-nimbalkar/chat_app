
import Header from 'components/header/Header';
import TopImage  from 'components/topImage';
import AboutUs from 'components/aboutUs';
import OurProducts from 'components/ourProducts';

import './App.css';
import Certificates from 'components/certificates';
import Collab from 'components/collobaration';
import ContactUs from 'components/contactUs';
import Footer from 'components/footer';
import RoadMap from 'components/roadMap';


function App() {
  return (
  <>  
      <Header />
      <TopImage />
      <AboutUs />
      <OurProducts />
      <RoadMap />
      <Certificates />
      <Collab />
      <ContactUs />
      <Footer />
  </>
  );
}

export default App;
