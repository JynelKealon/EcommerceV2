import './App.css';
import Header from './components/nav'
import Home from './components/home'
import Contact from './components/contact'
import Footer from './components/footer'
import ProductList from './components/productlist';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {

  return (
   <>
   <Router >
   <Header />
    <Routes>
          <Route path="/home" element={<Home/>} />
          { <Route path="/products" element={<ProductList/>} /> }
          <Route path="/contact" element={<Contact />} />
    </Routes>
  <Footer />
  </Router>
   </>
  );
};


export default App;