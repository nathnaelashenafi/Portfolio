import { ArrowBigRight, Download } from "lucide-react";
import { SocialLinks } from "../components/SocialLinks";

export function Hero() {
  return (
    <div>
      <div>
        <span>Hi, I'm</span>
        <h1>Nathnael Ashenafi</h1>
        <h2>Computer Science Student & Developer</h2>
        <p>
          I build web applications and enjoy turning ideas into real world
          solutions with code.
        </p>
        <div>
          <button>
            View my work <ArrowBigRight size={22} />{" "}
          </button>
          <button>
            Download Resume <Download size={22} />
          </button>
        </div>
        <div>
          <span>Connect with me</span>
          <SocialLinks />
        </div>
      </div>
      <div>
        <div></div>
        <img src="" alt="Image of Nathnael Ashenafi" />
      </div>
    </div>
  );
}
