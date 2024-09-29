import { MapPin, Phone, Mail, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black w-full">
      <div className="max-w-7xl mx-auto px-10 py-8">
        {/* Contact Information */}
        <div className="flex flex-wrap justify-between mb-8 border-b border-gray-200 pb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <MapPin className="text-purple-600 mr-2" />
            <div>
              <h3 className="font-bold">Find us</h3>
              <p className="text-sm">1010 Avenue, SW 54321, Chandigarh</p>
            </div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <Phone className="text-purple-600 mr-2" />
            <div>
              <h3 className="font-bold">Call us</h3>
              <p className="text-sm">9876543210</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="text-purple-600 mr-2" />
            <div>
              <h3 className="font-bold">Mail us</h3>
              <p className="text-sm">mail@info.com</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-wrap -mx-4">
          {/* Company Info */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold mr-2">ak</div>
              <div>
                <div className="text-purple-600">Home</div>
                <div>Haven</div>
              </div>
            </div>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h4 className="font-bold mb-2">Follow us</h4>
            <div className="flex space-x-2">
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">
                <Twitter className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Expert Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Latest News
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4">
              Don't miss to subscribe to our new feeds, kindly fill the form
              below.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="p-2 border border-gray-300 rounded-l w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-r"
              >
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}