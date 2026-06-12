import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../constants";
import HeaderTitle from "../components/HeaderTitle";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle title="Reach Out Anytime" />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-black-100 border border-black-50 rounded-xl p-9 h-full flex flex-col justify-between relative overflow-hidden">
              {/* Decorative circles */}
              {/* <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/[0.04] pointer-events-none" />
              <div className="absolute -top-5 -right-5 w-32 h-32 rounded-full border border-white/[0.03] pointer-events-none" /> */}

              {/* Header */}
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/25 mb-3">
                  Let's connect
                </p>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Find me online
                </h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">
                  Open to collaborations, freelance work, and new opportunities.
                </p>
              </div>

              {/* <div className="h-px bg-white/[0.07] my-7" /> */}

              {/* Social links */}
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="flex items-center gap-4 px-4 py-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/[0.14] hover:translate-x-1 transition-all duration-200 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg} ${s.iconColor}`}
                    >
                      <img
                        src={s.icon}
                        alt={s.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        {s.name}
                      </p>
                      <p className="text-xs text-white/35">{s.handle}</p>
                    </div>
                    <span className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
