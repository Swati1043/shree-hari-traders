import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#252525] text-white">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          alt="Premium tile interior"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 pb-32 pt-32 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-[#d3a47e]">
              SHREE HARI TRADERS
            </p>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-8xl lg:text-[104px]">
              Premium Tiles.
              <br />
              <span className="text-white/80">Timeless Spaces.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Discover thoughtfully selected tiles and surface solutions
              designed to bring character, comfort, and lasting style to every
              space.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/collections"
                className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#252525] transition-all duration-300 hover:bg-[#d3a47e]"
              >
                Explore Tiles

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 border border-white/50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#252525]"
              >
                Get a Quote

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Category Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="mx-auto max-w-[1500px] border-t border-white/20 px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {["Marble", "Stone", "Wood", "Concrete", "Porcelain"].map(
              (category, index) => (
                <Link
                  key={category}
                  to="/collections"
                  className={`group flex items-center justify-between border-white/15 py-5 text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-white ${
                    index < 4 ? "border-r" : ""
                  }`}
                >
                  <span>{category}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-28 right-6 z-10 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
          Scroll
        </span>

        <ArrowDown
          size={15}
          className="animate-bounce text-white/60"
        />
      </motion.div>
    </section>
  );
}

export default Hero;