import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="text-primary text-lg font-medium inline-block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-dark leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nathnael Ashenafi
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-medium text-muted mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Computer Science Student & Developer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-muted/80 max-w-xl mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I build web applications and enjoy turning ideas into real world
            solutions with code.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-primary text-white text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View my work
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </a>

            <a
              href="/resume.pdf"
              download="Nathnael-Ashenafi-Resume"
              className="group flex items-center gap-2 border-2 border-primary text-primary text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Download Resume
              <Download
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
                size={20}
              />
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-8 -ml-5 sm:ml-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="text-primary-dark text-lg font-medium hidden sm:block">
              Connect with me
            </span>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] animate-pulse"></div>

            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/5 rounded-[40%_60%_70%_30%/60%_40%_50%_50%]"></div>

            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-[40%_60%_30%_70%/50%_60%_40%_50%]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            <div className="relative w-full h-full flex items-end justify-center">
              <motion.img
                className="w-full h-full object-contain drop-shadow-2xl"
                src="images/profile-removebg-preview.png"
                alt="Nathnael Ashenafi"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
