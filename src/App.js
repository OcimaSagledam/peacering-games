import { useState } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import HomePage from "./components/HomePage";
import StorePage from "./components/StorePage";
import BlogPage from "./components/BlogPage";
import SupportPage from "./components/SupportPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

import NavLinks from "./components/NavLinks";
import { useMediaQuery } from 'react-responsive'
import { Bars3Icon } from '@heroicons/react/24/outline'
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  const location = useLocation();

  const isTablet = useMediaQuery({
    query: '(max-width: 1024px)'
  })

  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="overflow-hidden">
      {/* navbar component */}
      <div className="relative flex justify-between items-center px-8 h-24 bg-black text-white text-3xl">
        <Link to="/"><img src="/peacering-logo.png" alt="Peacering Games" /></Link>
        {isTablet ?
          <>
            <button className="transition focus:text-[#FF6161]" onClick={() => setShowDropdown(!showDropdown)}>
              <Bars3Icon className="w-10 h-10" />

              {showDropdown &&
                <div className="absolute flex flex-col top-24 left-0 right-0 z-10 bg-neutral-900 text-white">
                  <NavLinks marginBottom="mb-2" />
                  <hr className="my-2" />
                  <span className={`transition mb-2 ${location.pathname === "/login" ? "text-[#FF6161]" : "hover:text-[#FF6161]"}`}>
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              }
            </button>

          </>
          :
          <>
            <div className="flex h-24 justify-center items-center space-x-12">
              <NavLinks />
            </div>

            <span className={`transition ${location.pathname === "/login" ? "text-[#FF6161]" : "hover:text-[#FF6161]"}`}>
              <Link to="/login">Login</Link>
            </span>
          </>
        }
      </div>

      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>

      <div className="relative flex justify-center items-center px-8 h-16 bg-black text-black text-lg md:text-3xl">
        <button className="w-fit px-4 lg:mt-0 h-12 transition bg-[#FF6161] hover:bg-[#ff4f4f] hover:scale-105" type="button">{isTablet ? "Newsletter" : "Join our Newsletter"}</button>
        <div className="flex items-end">
          {!isTablet && <span className="text-white ml-4">Socials:</span>}
          <span className="flex space-x-4 ml-4"><FacebookIcon /> <InstagramIcon /> <TwitterIcon /></span>
        </div>
      </div>
    </div>
  );
}
