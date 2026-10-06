import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="bg-[#f7f4ef] py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                alt="Elegant tiled interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-6 right-5 bg-[#252525] px-6 py-5 text-white sm:right-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d3a47e]">
                SHREE HARI
              </p>

              <p className="mt-2 font-serif text-xl">
                Premium Surfaces
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a56a43]">
              About Shree Hari Traders
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-[1.08] text-[#252525] md:text-6xl">
              Surfaces that bring
              <br />
              <span className="text-[#a56a43]">spaces to life.</span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#252525]/60">
              <p>
                The right tile does more than cover a surface. It influences
                how a room feels, reflects light and brings an interior
                together.
              </p>

              <p>
                At Shree Hari Traders, our focus is on helping you discover
                surfaces that balance visual character, finish and everyday
                practicality.
              </p>
            </div>

            {/* Divider */}
            <div className="my-10 h-px w-full bg-[#252525]/15" />

            {/* Details */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-serif text-2xl text-[#252525]">01</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#252525]/45">
                  Curated Designs
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#252525]">02</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#252525]/45">
                  Modern Finishes
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#252525]">03</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#252525]/45">
                  Guided Choice
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#252525]"
            >
              Discover Our Story

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;