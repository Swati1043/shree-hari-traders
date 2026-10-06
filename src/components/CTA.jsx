import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#e8ded3] py-24 text-[#252525] md:py-32">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#a56a43]/15 md:h-96 md:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-[#a56a43]/10" />

      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a56a43]">
            Start Your Space
          </p>

          {/* Heading */}
          <h2 className="font-serif text-5xl leading-[1.05] text-[#252525] md:text-7xl lg:text-8xl">
            Let's find the
            <br />
            <span className="text-[#252525]/80">right surface.</span>
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#252525]/60 md:text-base">
            Tell us about your space, style or project. We'll help you explore
            tile options that fit your vision.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#252525] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#a56a43]"
            >
              Request a Quote

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/collections"
              className="group inline-flex items-center justify-center gap-3 border border-[#252525]/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#252525] transition-all duration-300 hover:border-[#a56a43] hover:text-[#a56a43]"
            >
              Explore Collections

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mx-auto mt-20 max-w-[1500px] border-t border-[#252525]/10 px-6 pt-6 md:mt-24 md:px-10 lg:px-12"
      >
        <div className="flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#252525]/30">
            SHREE HARI TRADERS
          </p>

          <p className="text-[9px] uppercase tracking-[0.3em] text-[#252525]/30">
            Premium Tiles & Surface Solutions
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;