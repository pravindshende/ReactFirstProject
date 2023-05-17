import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Navbar } from './component/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Contact } from './pages/contact';
import { About } from './pages/about';


function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element = <Shop /> />
        <Route path='/cart' element = <Cart /> />
        <Route path='/contact' element = <Contact /> />
        <Route path='/about' element = <About /> />
      </Routes>
    </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
