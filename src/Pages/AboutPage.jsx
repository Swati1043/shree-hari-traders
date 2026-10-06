import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#252525]">
      {/* Hero */}
      <section className="bg-[#252525] pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/"
              className="group mb-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back Home
            </Link>

            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#d3a47e]">
              About Shree Hari Traders
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Thoughtful surfaces.
              <br />
              Beautiful spaces.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
              alt="Modern interior with premium surfaces"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#a56a43]">
              Our Approach
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              A tile is part of
              <br />
              the bigger picture.
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-[#252525]/60">
              <p>
                Shree Hari Traders is built around a simple idea: choosing the
                right surface should feel inspiring, not overwhelming.
              </p>

              <p>
                From timeless marble-inspired designs to contemporary stone,
                wood and concrete looks, our collections are selected to give
                spaces a distinct sense of character.
              </p>

              <p>
                We focus on design, finish and practical suitability so that
                every choice feels considered from the first look to the final
                space.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#e8ded3] py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#a56a43]">
              What Matters
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Designed around your space.
            </h2>
          </motion.div>

          <div className="grid border-t border-[#252525]/15 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-b border-[#252525]/15 py-10 md:border-b-0 md:border-r md:pr-10"
            >
              <span className="font-serif text-3xl">01</span>

              <h3 className="mt-8 font-serif text-2xl">
                Considered Design
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#252525]/55">
                Collections chosen with an eye for texture, tone, proportion
                and contemporary interiors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-b border-[#252525]/15 py-10 md:border-b-0 md:border-r md:px-10"
            >
              <span className="font-serif text-3xl">02</span>

              <h3 className="mt-8 font-serif text-2xl">
                Versatile Surfaces
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#252525]/55">
                Different looks, finishes and formats to complement a wide
                range of residential and commercial spaces.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="py-10 md:pl-10"
            >
              <span className="font-serif text-3xl">03</span>

              <h3 className="mt-8 font-serif text-2xl">
                Helpful Guidance
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#252525]/55">
                A straightforward way to explore options and move closer to
                the right surface for your project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10 lg:px-12">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-[#a56a43]">
              Explore Further
            </p>

            <h2 className="font-serif text-4xl md:text-6xl">
              Find a surface
              <br />
              for your next space.
            </h2>
          </div>

          <Link
            to="/collections"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Explore Collections

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;