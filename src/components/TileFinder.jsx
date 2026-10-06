import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const spaces = ["Living Room", "Kitchen", "Bathroom", "Outdoor"];

const styles = ["Marble", "Stone", "Wood", "Concrete"];

const finishes = ["Matt", "Glossy", "Textured"];

const recommendations = {
  Marble: {
    name: "Carrara Vein",
    description:
      "A refined marble-look surface with soft veining for elegant interiors.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },

  Stone: {
    name: "Terra Sand",
    description:
      "A warm stone-inspired finish that brings a natural, grounded feel.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },

  Wood: {
    name: "Oak Reserve",
    description:
      "A warm wood-look surface designed for comfortable contemporary spaces.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },

  Concrete: {
    name: "Urban Slate",
    description:
      "A modern concrete-inspired surface with a clean architectural character.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
};

function TileFinder() {
  const [selectedSpace, setSelectedSpace] = useState("Living Room");
  const [selectedStyle, setSelectedStyle] = useState("Marble");
  const [selectedFinish, setSelectedFinish] = useState("Matt");

  const recommendation = recommendations[selectedStyle];

  return (
    <section
      id="tile-finder"
      className="relative overflow-hidden bg-[#252525] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.3em] text-[#d3a47e]">
            Tile Finder
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Find the right surface
            <br />
            for your space.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Start with your space, choose a style, and explore a surface that
            could work beautifully for your project.
          </p>
        </motion.div>

        {/* Finder */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="border-t border-white/15"
          >
            {/* Space */}
            <div className="border-b border-white/15 py-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium">01</span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Space
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {spaces.map((space) => {
                  const active = selectedSpace === space;

                  return (
                    <button
                      key={space}
                      type="button"
                      onClick={() => setSelectedSpace(space)}
                      className={`border px-4 py-2.5 text-xs transition-all duration-300 ${
                        active
                          ? "border-[#d3a47e] bg-[#d3a47e] text-[#252525]"
                          : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {space}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Style */}
            <div className="border-b border-white/15 py-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium">02</span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Style
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {styles.map((style) => {
                  const active = selectedStyle === style;

                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setSelectedStyle(style)}
                      className={`border px-4 py-2.5 text-xs transition-all duration-300 ${
                        active
                          ? "border-[#d3a47e] bg-[#d3a47e] text-[#252525]"
                          : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {style}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Finish */}
            <div className="border-b border-white/15 py-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium">03</span>

                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Finish
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {finishes.map((finish) => {
                  const active = selectedFinish === finish;

                  return (
                    <button
                      key={finish}
                      type="button"
                      onClick={() => setSelectedFinish(finish)}
                      className={`border px-4 py-2.5 text-xs transition-all duration-300 ${
                        active
                          ? "border-[#d3a47e] bg-[#d3a47e] text-[#252525]"
                          : "border-white/15 text-white/65 hover:border-white/40 hover:text-white"
                      }`}
                    >
                      {finish}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Options */}
            <div className="mt-7 flex flex-wrap gap-2">
              <div className="flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-white/60">
                <Check size={13} className="text-[#d3a47e]" />
                {selectedSpace}
              </div>

              <div className="flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-white/60">
                <Check size={13} className="text-[#d3a47e]" />
                {selectedStyle}
              </div>

              <div className="flex items-center gap-2 border border-white/10 px-3 py-2 text-[11px] text-white/60">
                <Check size={13} className="text-[#d3a47e]" />
                {selectedFinish}
              </div>
            </div>
          </motion.div>

          {/* Recommendation */}
          <motion.div
            key={`${selectedStyle}-${selectedSpace}-${selectedFinish}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="group"
          >
            <div className="relative overflow-hidden">
              <img
                src={recommendation.image}
                alt={recommendation.name}
                className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#d3a47e]">
                  Recommended for {selectedSpace}
                </p>

                <h3 className="font-serif text-3xl md:text-4xl">
                  {recommendation.name}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                  {recommendation.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-5">
                  <div className="flex gap-5 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    <span>{selectedStyle}</span>
                    <span>{selectedFinish}</span>
                  </div>

                  <Link
                    to="/collections"
                    className="group/btn flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white"
                  >
                    Explore Collection

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-white/35">
              Use this as a starting point — our team can help you choose the
              right surface for your project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default TileFinder;