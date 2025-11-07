import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/oflower.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Menus", path: "/menus" },
    { id: 3, title: "About Us", path: "/about" },
    { id: 4, title: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm shadow fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-primary">
          L
          <img
            src={logo}
            alt="O"
            className="inline-block w-7 h-7 object-cover rounded-full mx-1"
            style={{ verticalAlign: "middle" }}
          />
          yed Flowers
          <FaLeaf className="text-green-500 ml-2" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-semibold">
          {menuItems.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className={`hover:text-primary transition ${
                  location.pathname === menu.path ? "text-primary" : ""
                }`}
              >
                {menu.title}
              </Link>
            </li>
          ))}
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <MdOutlineShoppingCart />
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(true)}>
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <motion.div
              className="ml-auto w-3/4 sm:w-1/2 bg-white h-full shadow-lg flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <span className="font-bold text-xl text-primary flex items-center gap-2">
                  L
                  <img
                    src={logo}
                    alt="O"
                    className="inline-block w-6 h-6 object-cover rounded-full mx-1"
                  />
                  yed Flowers
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl text-gray-700 hover:text-primary"
                >
                  <MdClose />
                </button>
              </div>

              <ul className="flex flex-col items-start gap-6 px-6 py-8 text-lg font-semibold">
                {menuItems.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 hover:text-primary transition ${
                        location.pathname === menu.path ? "text-primary" : ""
                      }`}
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
                <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                  <MdOutlineShoppingCart />
                </button>
              </ul>
            </motion.div>
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
