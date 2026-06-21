import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'
import { Mail,  Loader2, CheckCircle, XCircle } from 'lucide-react'
import { FaGithub} from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

const inputStyle = {
  background: "rgba(6,4,18,0.6)",
  border: "1px solid rgba(147,51,234,0.25)",
  color: "#f0f0ff",
  borderRadius: "0.5rem",
  padding: "0.625rem 0.875rem",
  width: "100%",
  outline: "none",
  fontSize: "0.95rem",
  transition: "border 0.2s, box-shadow 0.2s",
};

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/RudainaAly54" },
  { icon: LuLinkedin, href: "https://www.linkedin.com/in/rudaina-aly-6a3879312" },
  { icon: Mail, href: "mailto:rudainaaly154@gmail.com" },
];

const Contacts = () => {

    /* EMAIL SENDING */
    const formRef = useRef(null)
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('success')
            formRef.current.reset()
            setTimeout(() => setStatus('idle'), 4000)
        })
        .catch((err) => {
            console.log(err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        })
    }

    return (
        <motion.section
            id="Contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px]"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                {/* Left panel: form */}
                <div className="flex flex-col gap-6 w-full">
                    <div>
                        <h2 className="text-5xl md:text-6xl text-[#DDDDDF] font-semibold mb-3">Let's Work Together</h2>
                        <p className="text-gray-400 text-lg leading-8">
                            Have a project in mind? Drop me a message and let's create something amazing!
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                            <input
                                type="text"
                                name="from_name"
                                placeholder="John Doe"
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.7)"}
                                onBlur={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.25)"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="from_email"
                                placeholder="john@example.com"
                                required
                                style={inputStyle}
                                onFocus={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.7)"}
                                onBlur={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.25)"}
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                required
                                style={{ ...inputStyle, resize: "vertical" }}
                                onFocus={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.7)"}
                                onBlur={(e) => e.target.style.border = "1px solid rgba(147,51,234,0.25)"}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            style={{ background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)" }}
                        >
                            {status === 'sending' ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Mail size={16} />
                                    Send Message
                                </>
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-green-400 text-sm"
                            >
                                <CheckCircle size={16} />
                                Message sent! I'll get back to you soon.
                            </motion.p>
                        )}

                        {status === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-red-400 text-sm"
                            >
                                <XCircle size={16} />
                                Something went wrong. Please try again.
                            </motion.p>
                        )}
                    </form>

                    <div>
                        <p className="text-gray-500 text-sm mb-3">Or connect with me on:</p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href.startsWith('http') ? "_blank" : undefined}
                                    rel="noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-[rgba(147,51,234,0.3)] text-[#d8b4fe] hover:bg-[rgba(147,51,234,0.15)] hover:border-[rgba(147,51,234,0.6)] transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right panel: decorative code mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="rounded-xl p-6 font-mono text-sm overflow-x-auto shadow-lg bg-[rgba(6,4,18,0.95)] border-1 border-[rgba(147,51,234,0.3)] w-full"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-gray-500 text-xs">contact.html</span>
                    </div>

                    <pre className="text-purple-300 leading-7 whitespace-pre-wrap">
                        <span className="text-gray-600">{"<!-- Let's Connect! -->"}</span>{"\n"}
                        <span className="text-pink-400">{"<form"}</span>{" "}
                        <span className="text-green-300">id</span>=
                        <span className="text-orange-300">"contact-form"</span>
                        <span className="text-pink-400">{">"}</span>{"\n\n"}
                        {"  "}<span className="text-pink-400">{"<input"}</span>{"\n"}
                        {"    "}<span className="text-green-300">type</span>=
                        <span className="text-orange-300">"text"</span>{"\n"}
                        {"    "}<span className="text-green-300">name</span>=
                        <span className="text-orange-300">"Projects"</span>{"\n"}
                        {"    "}<span className="text-green-300">placeholder</span>=
                        <span className="text-orange-300">"What's the challenge?"</span>{"\n"}
                        {"    "}<span className="text-green-300">required</span>
                        {"  "}<span className="text-pink-400">{"/>"}</span>{"\n\n"}
                        {"  "}<span className="text-pink-400">{"<button"}</span>
                        
                        <span className="text-pink-400">{">"}</span>{"\n"}
                        {"    "}<span className="text-blue-300">Submit &amp; Start Building!</span>{"\n"}
                        {"  "}<span className="text-pink-400">{"</button>"}</span>{"\n"}
                        <span className="text-pink-400">{"</form>"}</span>
                    </pre>

                    <div
                        className="mt-5 pt-4 flex flex-col gap-1"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                        <span className="text-gray-600">{"<!--   Response time: Depends on how interesting the message is-->"}</span>
                        <span className="text-gray-600">{"<!-- Just kidding. Usually within 24–48 hours. -->"}</span>

                    </div>

                    <div
                        className="mt-4 pt-4"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                        <span className="text-gray-600">{"// Always building, always learning"}</span>
                        <br />
                        <span className="text-gray-600">{"//  Always curious about new challenges"}</span>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    )
}

export default Contacts