import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          category: formData.category,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          category: "",
          message: "",
        });
        setIsSending(false);

        setTimeout(() => setStatus(null), 6000);
      })
      .catch(() => {
        setStatus("error");
        setIsSending(false);

        setTimeout(() => setStatus(null), 6000);
      });
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="text-primary text-sm font-medium tracking-wide">
            Get in touch
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-primary-dark leading-tight mt-2 mb-4">
            Let's talk
          </h2>

          <p className="text-muted text-base leading-relaxed">
            Have a project, opportunity, or idea you'd like to discuss? Send me
            a message and I'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border rounded-xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary-dark placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary-dark mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary-dark placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  What can I help with?
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary-dark focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="Web Development">Web development</option>
                  <option value="Virtual Assistant">Virtual assistant</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-primary-dark mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-primary-dark placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-6 inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-dark transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-5 flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 px-4 py-3 rounded-lg text-sm">
                  <CheckCircle size={18} />
                  Message sent successfully. Thanks for reaching out.
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-lg text-sm">
                  <AlertCircle size={18} />
                  Couldn't send the message. Please try again.
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="border-t border-border">
              <div className="py-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-primary mt-1" />

                  <div>
                    <p className="text-sm text-muted mb-1">Email</p>

                    <a
                      href="mailto:nathnaelashenafi@gmail.com"
                      className="text-primary-dark font-medium hover:text-primary transition-colors"
                    >
                      nathnaelashenafi21@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="py-6 border-b border-border">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-primary mt-1" />

                  <div>
                    <p className="text-sm text-muted mb-1">Location</p>

                    <p className="text-primary-dark font-medium">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm text-muted leading-relaxed">
                  I'm open to discussing freelance work, internships,
                  collaborations, and interesting ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
