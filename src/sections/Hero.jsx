import { ArrowRight, Download } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-12"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-primary text-lg font-medium inline-block mb-2">
            Hi, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-primary-dark leading-tight">
            Nathnael Ashenafi
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-muted mt-2">
            Computer Science Student & Developer
          </h2>
          <p className="text-base sm:text-lg text-muted/80 max-w-xl mt-4 leading-relaxed">
            I build web applications and enjoy turning ideas into real world
            solutions with code.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="group flex items-center gap-2 bg-primary text-white text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-lg">
              View my work
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </button>

            <button className="group flex items-center gap-2 border-2 border-primary text-primary text-base sm:text-lg font-medium px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Download Resume
              <Download
                className="group-hover:-translate-y-0.5 transition-transform duration-300"
                size={20}
              />
            </button>
          </div>
          <div className="flex items-center gap-4 mt-8 -ml-5 sm:ml-0">
            <span className="text-primary-dark text-lg font-medium hidden sm:block">
              Connect with me
            </span>
            <SocialLinks />
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/5 rounded-[40%_60%_70%_30%/60%_40%_50%_50%]"></div>

            <div
              className="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5 rounded-[40%_60%_30%_70%/50%_60%_40%_50%] 
                          hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
            ></div>

            <div className="relative w-full h-full flex items-end justify-center">
              <img
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                src="images/profile-removebg-preview.png"
                alt="Nathnael Ashenafi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
