import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Get in Touch
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Let's talk about
              <br />
              your space.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              Tell us what you're working on and we'll help you explore the
              right surfaces for your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 md:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-[11px] uppercase tracking-[0.3em] text-[#a56a43]">
              Contact
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Start with
              <br />
              an idea.
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#252525]/55">
              Whether you're planning a home, renovating a room or working on
              a larger project, we'd love to hear what you have in mind.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#252525]/40">
                  Phone
                </p>

                <a
                  href="tel:+919876543210"
                  className="text-sm transition-colors hover:text-[#a56a43]"
                >
                  +91 98765 43210
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#252525]/40">
                  Email
                </p>

                <a
                  href="mailto:hello@shreetraders.com"
                  className="text-sm transition-colors hover:text-[#a56a43]"
                >
                  hello@shreetraders.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[#252525]/40">
                  Hours
                </p>

                <p className="text-sm leading-6 text-[#252525]/60">
                  Monday — Saturday
                  <br />
                  10:00 AM — 7:00 PM
                </p>
              </div>
            </div>

            <Link
              to="/collections"
              className="group mt-10 inline-flex items-center gap-2 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.18em]"
            >
              Browse Collections

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="border-t border-[#252525]/15 pt-8"
          >
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center border border-[#a56a43] text-[#a56a43]">
                  <Check size={22} />
                </div>

                <h2 className="mt-7 font-serif text-4xl">
                  Thank you.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#252525]/55">
                  Your enquiry has been received. We'll get back to you with
                  the next steps.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border-b border-[#252525] pb-2 text-xs font-semibold uppercase tracking-[0.18em]"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-9">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#252525]/45"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border-b border-[#252525]/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#252525]/25 focus:border-[#a56a43]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#252525]/45"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b border-[#252525]/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#252525]/25 focus:border-[#a56a43]"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#252525]/45"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="w-full border-b border-[#252525]/20 bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#252525]/25 focus:border-[#a56a43]"
                  />
                </div>

                {/* Project */}
                <div>
                  <label
                    htmlFor="project"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#252525]/45"
                  >
                    Project Type
                  </label>

                  <select
                    id="project"
                    name="project"
                    required
                    defaultValue=""
                    className="w-full border-b border-[#252525]/20 bg-transparent px-0 py-3 text-sm outline-none focus:border-[#a56a43]"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="home">Home / Residential</option>
                    <option value="office">Office / Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[#252525]/45"
                  >
                    Tell Us About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your space, preferred style or what you're looking for..."
                    className="w-full resize-none border-b border-[#252525]/20 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition-colors placeholder:text-[#252525]/25 focus:border-[#a56a43]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-[#252525] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#a56a43]"
                >
                  Send Enquiry

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;