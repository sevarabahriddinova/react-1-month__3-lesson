import './App.css'
import Banner from './components/banner/Banner';
import Header from './components/header/Header';
import Product from './components/product/Product';
import Mobile from './components/mobileApp/Mobile';
import Section from './components/section/Section';
import Footer from './components/footer/Footer';
function App() {
 
  return (
    <>
       <Header/>
       <Banner/>
       <Product/>
       <Mobile/>
       <Section/>
       <Footer/>
      </>
  )
}
export default App
