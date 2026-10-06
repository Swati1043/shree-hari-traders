import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    number: "01",
    name: "Marble",
    description:
      "Elegant marble-inspired surfaces with refined veining and timeless character.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    name: "Stone",
    description:
      "Natural textures and earthy tones for calm, grounded interiors.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-5",
  },
  {
    number: "03",
    name: "Wood",
    description:
      "Warm wood-look surfaces that bring comfort and character to modern spaces.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-5",
  },
  {
    number: "04",
    name: "Concrete",
    description:
      "Clean architectural finishes for contemporary and minimal spaces.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-5",
  },
  {
    number: "05",
    name: "Porcelain",
    description:
      "Versatile surfaces combining practical performance with modern design.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-7",
  },
];

function Collections() {
  return (
    <section className="bg-[#f7f4ef] py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#a56a43]">
              Our Collections
            </p>

            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#252525] md:text-6xl">
              Find the surface
              <br />
              that fits your space.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#252525]/55">
            Explore a curated selection of marble, stone, wood, concrete and
            porcelain-inspired surfaces.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid gap-5 md:grid-cols-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className={`group ${collection.className}`}
            >
              <Link
                to="/collections"
                className="relative block h-full min-h-[340px] overflow-hidden md:min-h-0"
              >
                {/* Image */}
                <img
                  src={collection.image}
                  alt={`${collection.name} tile collection`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Content */}
                <div className="relative flex h-full min-h-[340px] flex-col justify-between p-6 text-white md:min-h-[360px] md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/65">
                      {collection.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-white/30 opacity-0 transition-all duration-300 group-hover:border-white group-hover:opacity-100">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">
                      {collection.name}
                    </h3>

                    <p className="mt-3 max-w-md text-xs leading-6 text-white/65 md:text-sm">
                      {collection.description}
                    </p>

                    <div className="mt-5 h-px w-full bg-white/20 transition-all duration-500 group-hover:bg-white/50" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col justify-between gap-5 border-t border-[#252525]/15 pt-7 sm:flex-row sm:items-center"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#252525]"
          >
            View All Collections

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#252525]/60 transition-colors duration-300 hover:text-[#252525]"
          >
            Need help choosing?

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Collections;