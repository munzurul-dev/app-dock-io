import { FaFacebookF, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#001b33] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={logo}
              alt="AppDock.IO"
              className="w-20 mb-5"
            />

            <p className="text-gray-400 text-sm leading-6 max-w-sm">
              Discover, explore and manage the best applications in one place.
              Built for users who want a simple and powerful app experience.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/apps" className="hover:text-white transition">
                  Apps
                </a>
              </li>

              <li>
                <a
                  href="/installation"
                  className="hover:text-white transition"
                >
                  Installation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Resources</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Stay Connected</h3>

            <p className="text-gray-400 text-sm leading-6 mb-5">
              Get the latest updates and discover new applications.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full min-w-0 px-4 py-3 rounded-l-lg bg-white/10 border border-white/10 outline-none text-sm text-white placeholder:text-gray-500 focus:border-purple-500"
              />

              <button className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-r-lg font-semibold text-sm transition">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© 2026 AppDock.IO. All rights reserved.</p>

          <p>
            Built with <span className="text-purple-400">React</span> &{" "}
            <span className="text-purple-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
