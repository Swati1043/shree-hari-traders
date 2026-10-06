import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

const collections = [
  {
    name: "Marble",
    description:
      "Elegant veining and refined surfaces for timeless interiors.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Stone",
    description:
      "Natural character with understated textures and earthy tones.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Wood",
    description:
      "Warm wood-inspired surfaces that bring comfort to modern spaces.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Concrete",
    description:
      "Contemporary surfaces with a clean architectural character.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Porcelain",
    description:
      "Versatile surfaces combining durability with refined aesthetics.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  },
];

const finishes = ["All", "Matt", "Polished", "Textured"];

function CollectionPage() {
  const [activeFinish, setActiveFinish] = useState("All");

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
              Tile Collections
            </p>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Surfaces for
              <br />
              every expression.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              Explore a considered selection of marble, stone, wood, concrete
              and porcelain-inspired surfaces for contemporary interiors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-b border-[#252525]/10 bg-[#f7f4ef]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#252525]/40">
            Explore by finish
          </p>

          <div className="flex flex-wrap gap-2">
            {finishes.map((finish) => {
              const isActive = activeFinish === finish;

              return (
                <button
                  key={finish}
                  type="button"
                  onClick={() => setActiveFinish(finish)}
                  className={`inline-flex items-center gap-2 border px-4 py-2 text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive
                      ? "border-[#252525] bg-[#252525] text-white"
                      : "border-[#252525]/15 text-[#252525]/55 hover:border-[#252525]/40"
                  }`}
                >
                  {isActive && <Check size={12} />}
                  {finish}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
            {collections.map((collection, index) => {
              const isLarge = index === 0 || index === 3;

              return (
                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  className={`group ${
                    isLarge ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                >
                  <Link to="/collections" className="block">
                    <div
                      className={`relative overflow-hidden ${
                        isLarge
                          ? "aspect-[16/10]"
                          : "aspect-[16/11]"
                      }`}
                    >
                      <img
                        src={collection.image}
                        alt={`${collection.name} tile collection`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                        <div className="flex items-end justify-between gap-6">
                          <div>
                            <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/60">
                              Collection
                            </p>

                            <h2 className="font-serif text-3xl md:text-4xl">
                              {collection.name}
                            </h2>

                            <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                              {collection.description}
                            </p>
                          </div>

                          <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#252525] opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <ArrowUpRight
                              size={17}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#252525]/10 py-20 md:py-28">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10 lg:px-12">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#a56a43]">
              Need help choosing?
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Let's find the right
              <br />
              surface for your space.
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            Talk to Us

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

export default CollectionPage;