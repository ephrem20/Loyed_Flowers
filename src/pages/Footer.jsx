import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-secondary/5 text-black py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-primary">LOYED FLOWERS</h3>
            <p className="text-black">
            Flower Store in the Addis, Get Fresh and elegant flowers today
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg b
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-400 to-orange-400 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-black">
            &copy; {new Date().getFullYear()} Loyed Flowers. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0 text-blue-400 ">
            <a href="https://t.me/e_ephrem" className="text-blue-400 hover:text-primary" target="_blank">
              <FaTelegram />
            </a>
            <a href="#" className=" text-blue-400 hover:text-primary" target="_blank" >
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/bereket-mengesha/" className= "text-blue-400 hover:text-primary" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/ephrem20" className=" text-blue-400 hover:text-primary" target="_blank">
              <FaFacebook />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-primary">
              Privacy
            </a>
            <a href="#" className="text-black hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
