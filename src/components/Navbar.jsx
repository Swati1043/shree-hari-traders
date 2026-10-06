import { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { Menu, X, ArrowUpRight } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "Tiles", path: "/collections" },
  { name: "Tile Finder", path: "/#tile-finder" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Tile Finder navigation
  const handleTileFinder = (e) => {
    e.preventDefault();

    closeMenu();

    if (location.pathname === "/") {
      document.getElementById("tile-finder")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("tile-finder")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f4ef]/95 text-[#252525] shadow-sm backdrop-blur-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-12">

          {/* ================= BRAND / LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center"
            aria-label="Shree Hari Traders"
          >
            {/* Logo for dark hero background */}
            <img
              src="/SHT-logo.png"
              alt="Shree Hari Traders"
              className={`h-12 w-auto object-contain transition-all duration-500 ${
                scrolled
                  ? "hidden"
                  : "block"
              }`}
            />

            {/* Logo for light/cream navbar */}
            <img
              src="/SHT-white-logo.png"
              alt="Shree Hari Traders"
              className={`h-12 w-auto object-contain transition-all duration-500 ${
                scrolled
                  ? "block"
                  : "hidden"
              }`}
            />
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) =>
              item.name === "Tile Finder" ? (
                <a
                  key={item.name}
                  href="#tile-finder"
                  onClick={handleTileFinder}
                  className="group relative py-2 text-[13px] font-medium tracking-wide"
                >
                  <span className="opacity-75 transition-opacity duration-300 group-hover:opacity-100">
                    {item.name}
                  </span>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="group relative py-2 text-[13px] font-medium tracking-wide"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`transition-opacity duration-300 ${
                          isActive
                            ? "opacity-100"
                            : "opacity-75 group-hover:opacity-100"
                        }`}
                      >
                        {item.name}
                      </span>

                      <span
                        className={`absolute bottom-0 left-0 h-px bg-current transition-all duration-300 ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              )
            )}

            {/* Get a Quote */}
            <Link
              to="/contact"
              className={`group flex items-center gap-2 border px-5 py-3 text-[12px] font-medium tracking-wide transition-all duration-300 ${
                scrolled
                  ? "border-[#252525] hover:bg-[#252525] hover:text-white"
                  : "border-white/70 hover:bg-white hover:text-[#252525]"
              }`}
            >
              Get a Quote

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f7f4ef] pt-[82px] md:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 py-10">

              {/* Mobile Navigation */}
              <nav className="flex flex-col">
                {navItems.map((item, index) =>
                  item.name === "Tile Finder" ? (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                      }}
                    >
                      <a
                        href="#tile-finder"
                        onClick={handleTileFinder}
                        className="flex items-center justify-between border-b border-[#252525]/10 py-5 text-3xl font-medium"
                      >
                        {item.name}

                        <ArrowUpRight size={22} />
                      </a>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                      }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className="flex items-center justify-between border-b border-[#252525]/10 py-5 text-3xl font-medium"
                      >
                        {item.name}

                        <ArrowUpRight size={22} />
                      </NavLink>
                    </motion.div>
                  )
                )}
              </nav>

              {/* Mobile Quote Button */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="flex items-center justify-between border border-[#252525] px-5 py-4 text-sm font-medium"
              >
                Request a Quote

                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;