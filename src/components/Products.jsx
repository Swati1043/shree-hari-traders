import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    number: "01",
    name: "Carrara Vein",
    category: "Marble Look",
    finish: "Polished",
    size: "1200 × 600 mm",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    name: "Terra Sand",
    category: "Stone Look",
    finish: "Matt",
    size: "600 × 600 mm",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    name: "Oak Reserve",
    category: "Wood Look",
    finish: "Matt",
    size: "1200 × 200 mm",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    name: "Urban Slate",
    category: "Concrete Look",
    finish: "Textured",
    size: "600 × 1200 mm",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
];

function Products() {
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
              Featured Tiles
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#252525] md:text-6xl">
              Surfaces worth
              <br />
              looking closer.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#252525]/55">
            A selection of surfaces chosen for their character, finish and
            ability to transform a space.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
              className="group"
            >
              <Link to="/collections" className="block">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e8ded3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Number */}
                  <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white/80">
                    {product.number}
                  </span>

                  {/* Hover Button */}
                  <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center bg-white text-[#252525] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="border-b border-[#252525]/15 pb-5 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-[#252525]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[#252525]/45">
                        {product.category}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 text-[#252525]/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#a56a43]"
                    />
                  </div>

                  <div className="mt-5 flex gap-5 text-[10px] uppercase tracking-[0.15em] text-[#252525]/45">
                    <span>{product.finish}</span>
                    <span>{product.size}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-end"
        >
          <Link
            to="/collections"
            className="group inline-flex items-center gap-3 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#252525]"
          >
            Explore Full Collection

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;