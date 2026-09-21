import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Check,
  LoaderCircle,
} from "lucide-react";

function Contact() {
  const sendTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent"
  >("idle");

  const emailIsValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email
    );

  const formIsValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    emailIsValid &&
    message.trim() !== "";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!formIsValid || status === "sending") {
    return;
  }

  setStatus("sending");

  sendTimeoutRef.current = setTimeout(() => {
    setStatus("sent");

    setName("");
    setEmail("");
    setMessage("");

    resetTimeoutRef.current = setTimeout(() => {
      setStatus("idle");
    }, 3000);
  }, 1500);
};
useEffect(() => {
  return () => {
    if (sendTimeoutRef.current) {
      clearTimeout(sendTimeoutRef.current);
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
  };
}, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[180px]" />

      <div className="relative mx-auto w-full max-w-375">

        {/* Main Contact Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/30">
              06 / Contact
            </p>

            <h2 className="text-[clamp(4.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.065em]">
              Let's
              <br />
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Talk.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Open to roles, collabs, or just a good conversation.
            </p>

            {/* DIRECT EMAIL */}
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/30">
                Reach Out Directly at
              </p>

              <a
                href="mailto:aayushanand4229@gmail.com"
                className="group inline-flex items-center gap-2 text-base text-white/65 transition-colors duration-300 hover:text-blue-400 sm:text-lg"
              >
                <span>aayushanand4229@gmail.com</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-end">

            <form
              onSubmit={handleSubmit}
              className="group w-full max-w-225 rounded-3xl border border-white/10 bg-white/2.5 p-7 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[transform,border-color,background-color,box-shadow]
                  duration-500 ease-out hover:-translate-y-3 hover:border-blue-400/50 hover:bg-blue-500/4
                  hover:shadow-[0_25px_70px_rgba(59,130,246,0.16)] sm:p-8 lg:p-9"
            >

              {/* NAME */}
              <div className="border-b border-white/10 transition-colors duration-300 focus-within:border-blue-500/70">

                <label
                  htmlFor="name"
                  className="block pb-2 text-xs uppercase tracking-[0.25em] text-white/30"
                >
                  Name
                </label>

                <div className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent py-3.5 text-lg text-white outline-none placeholder:text-white/20 sm:text-xl"
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div className="mt-6 border-b border-white/10 transition-colors duration-300 focus-within:border-blue-500/70">

                <label
                  htmlFor="email"
                  className="block pb-2 text-xs uppercase tracking-[0.25em] text-white/30"
                >
                  Email
                </label>

                <div className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-transparent py-3.5 text-lg text-white outline-none placeholder:text-white/20 sm:text-xl"
                  />

                  {email.length > 0 && !emailIsValid && (
                    <p className="pb-2 text-xs text-red-400">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

              </div>

              {/* MESSAGE */}
              <div className="mt-6 border-b border-white/10 transition-colors duration-300 focus-within:border-blue-500/70">

                <label
                  htmlFor="message"
                  className="block pb-2 text-xs uppercase tracking-[0.25em] text-white/30"
                >
                  What's on your mind?
                </label>

                <div className="transition-transform duration-300 ease-out focus-within:-translate-y-1">
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={3}
                    placeholder="Tell me about your idea..."
                    required
                    className="w-full resize-none bg-transparent py-3.5 text-lg text-white outline-none placeholder:text-white/20 sm:text-xl"
                  />
                </div>

              </div>

              {/* BUTTON */}
              <div className="mt-6 flex justify-end">

                <button
                  type="submit"
                  disabled={!formIsValid || status === "sending"}
                  className={`group/button flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-medium transition-all duration-300 ${
                    status === "sending"
                      ? "cursor-wait border-green-400/50 bg-green-400/10 text-green-400"
                      : status === "sent"
                        ? "border-blue-400/50 bg-blue-500/10 text-blue-400"
                        : formIsValid
                          ? "border-white/15 text-white hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-blue-400"
                          : "cursor-not-allowed border-white/10 text-white/20"
                  }`}
                >

                  {status === "sending" && (
                    <>
                      <LoaderCircle
                        size={17}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  )}

                  {status === "sent" && (
                    <>
                      <Check size={17} />
                      Sent
                    </>
                  )}

                  {status === "idle" && (
                    <>
                      Send Message

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${
                          formIsValid
                            ? "group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                            : ""
                        }`}
                      />
                    </>
                  )}

                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;