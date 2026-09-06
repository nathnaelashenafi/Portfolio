import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const certificates = [
    {
      name: "ALX - certificate of Achievment",
      title: "Virtual Assistant",
      issuer: "ALX",
      issued: "12 May 2026",
      image: `${import.meta.env.BASE_URL}images/certeficates/Virtual-Assistant.jpg`,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase"
        >
          Certificates
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-10"
        >
          My achievements
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-1/3 h-40 overflow-hidden shrink-0"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-left"
                />
              </motion.div>

              <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-semibold text-xs">
                      {cert.name}
                    </span>
                  </div>

                  <h3 className="text-primary-dark font-semibold text-sm leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-muted text-xs mt-1">{cert.issuer}</p>

                  <p className="text-muted text-xs mt-1">
                    Issued: {cert.issued}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCert(cert)}
                  className="group flex items-center gap-1 text-primary text-xs font-medium mt-2 hover:text-primary-dark transition-colors text-left"
                >
                  View Certificate →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors z-10"
            >
              <X size={22} />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="p-5 bg-surface"
            >
              <h3 className="text-xl font-serif font-semibold text-primary-dark">
                {selectedCert.title}
              </h3>

              <p className="text-muted text-sm">
                {selectedCert.issuer} · Issued: {selectedCert.issued}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
