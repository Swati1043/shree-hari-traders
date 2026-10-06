import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  Sparkles,
  Ruler,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Layers3,
    title: "Curated Collections",
    text: "Thoughtfully selected surfaces across marble, stone, wood and contemporary finishes.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Premium Finishes",
    text: "Explore polished, matt and textured finishes designed for different spaces and styles.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Made for Every Space",
    text: "From compact rooms to expansive interiors, find formats that work with your design.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Guided Selection",
    text: "Not sure what to choose? We help you narrow down the right surface for your space.",
  },
];

function WhyUs() {
  return (
    <section className="bg-[#252525] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 border-b border-white/15 pb-14 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#d3a47e]">
              Why Shree Hari
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              More than tiles.
              <br />
              A better surface choice.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 md:justify-self-end">
            We bring together considered designs, versatile finishes and
            practical guidance to make choosing surfaces easier.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group border-b border-white/15 py-10 sm:border-r sm:px-7 lg:border-b-0 lg:px-8 first:pl-0 last:border-r-0"
              >
                {/* Number + Icon */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-white/35">
                    {reason.number}
                  </span>

                  <Icon
                    size={21}
                    strokeWidth={1.3}
                    className="text-[#d3a47e] transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl">{reason.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-serif text-2xl text-white/85 md:text-3xl">
            Have a space in mind?
          </p>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#d3a47e] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
          >
            Talk to Us

            <ArrowUpRight
              size={16}
              className="text-[#d3a47e] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;