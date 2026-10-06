import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { name: "Tiles", path: "/collections" },
  { name: "Tile Finder", path: "/#tile-finder" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#252525] text-white">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-14 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:py-20">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center border border-[#d3a47e] font-serif text-sm text-[#d3a47e]">
                  SHT
                </span>

                <div>
                  <p className="font-serif text-xl tracking-wide">
                    SHREE HARI
                  </p>

                  <p className="mt-0.5 text-[8px] tracking-[0.35em] text-white/40">
                    TRADERS
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
              Premium tiles and surface solutions for spaces designed to feel
              timeless.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white"
            >
              Get in Touch

              <ArrowUpRight
                size={15}
                className="text-[#d3a47e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-[#d3a47e]">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.25em] text-[#d3a47e]">
              Contact
            </p>

            <div className="space-y-4 text-sm text-white/55">
              <a
                href="tel:+919876543210"
                className="block w-fit transition-colors duration-300 hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@shreetraders.com"
                className="block w-fit transition-colors duration-300 hover:text-white"
              >
                hello@shreetraders.com
              </a>

              <p className="max-w-xs leading-6">
                Premium Tiles & Surface Solutions
              </p>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-6 text-[10px] uppercase tracking-[0.15em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shree Hari Traders</p>

          <Link
            to="/contact"
            className="w-fit transition-colors duration-300 hover:text-white"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;