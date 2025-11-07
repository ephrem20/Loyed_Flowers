import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden bg-secondary/5 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
         <Route path="/" element={
          <>
          <Home />
          <Menus />
          <About />
          <Shop />
          <Contact />
          </>
         }/>  
          <Route path="/menus" element={<Menus />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>

        <Footer />
      </main>
    </Router>
  );
};

export default App;
