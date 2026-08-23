import githubIcon from "../assets/icons8-github.svg";
import gmailIcon from "../assets/icons8-gmail.svg";
import linkedinIcon from "../assets/icons8-linkedin.svg";
import twitterIcon from "../assets/icons8-twitter.svg";

export function SocialLinks() {
  const socials = [
    {
      icon: githubIcon,
      label: "GitHub",
      url: "https://github.com/nathnaelashenafi",
    },
    {
      icon: gmailIcon,
      label: "Email",
      url: "mailto:nathnaelashenafi21@gmail.com",
    },
    {
      icon: linkedinIcon,
      label: "LinkedIn",
      url: "https://linkedin.com/in/nathnaelashenafi",
    },
    {
      icon: twitterIcon,
      label: "Twitter",
      url: "https://twitter.com/natitheodore",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-10 h-10 flex items-center justify-center rounded-full
           bg-surface border border-border hover:border-primary hover:bg-primary/5 
           transition-all duration-200 hover:scale-110 hover:shadow-md group"
        >
          <img
            src={social.icon}
            alt={social.label}
            className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
          />
        </a>
      ))}
    </div>
  );
}
