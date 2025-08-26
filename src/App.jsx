import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import PlaceOrder from "./Pages/PlaceOrder";
import Order from "./Pages/Order";
import Navbar from './components/Navebar';
import Foote from './components/Foote'
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-sans"> 
    <Navbar/>
    <SearchBar/>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Collection" element={<Collection />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/PlaceOrder" element={<PlaceOrder />} />
      <Route path="/Order" element={<Order />} />
    </Routes>
    <Foote/>
    </div>
  );
};

export default App;
