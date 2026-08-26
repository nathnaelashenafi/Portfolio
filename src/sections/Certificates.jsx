import { useState } from "react";
import { X } from "lucide-react";

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      name: "ALX - certificate of Achievment",
      title: "Virtual Assistant",
      issuer: "ALX",
      issued: "12 May 2026",
      image: "/images/certeficates/Virtual-Assistant.jpg",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
          Certificates
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-1 mb-10">
          My achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-xl border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex"
            >
              <div className="w-1/3 h-40 overflow-hidden shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-left"
                />
              </div>
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
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="group flex items-center gap-1 text-primary text-xs font-medium mt-2 hover:text-primary-dark transition-colors text-left"
                >
                  View Certificate →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors z-10"
            >
              <X size={22} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto"
            />
            <div className="p-5 bg-surface">
              <h3 className="text-xl font-serif font-semibold text-primary-dark">
                {selectedCert.title}
              </h3>
              <p className="text-muted text-sm">
                {selectedCert.issuer} · Issued: {selectedCert.issued}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
