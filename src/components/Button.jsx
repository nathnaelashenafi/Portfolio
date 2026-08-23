import { Send } from "lucide-react";
import { Moon } from "lucide-react";
export function Button() {
  return (
    <div className="flex gap-4 items-center text-white">
      <button
        className="flex gap-2 items-center font-medium text-[1.1rem] bg-primary px-4 py-2.5 rounded-lg
        hover:bg-primary-dark transition-all duration-300"
      >
        Let's Talk <Send size={18} />
      </button>
      <button className="text-primary hover:text-primary-dark transition-colors p-2 border-2 border-primary-dark rounded-lg border-double">
        <Moon size={25} />
      </button>
    </div>
  );
}
