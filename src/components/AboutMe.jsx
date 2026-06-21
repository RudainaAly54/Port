
import { motion } from "motion/react"

const AboutMe = () => {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={0.7}
      className="py-24 px-6 backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px] flex md:flex items-start justify-around max-md:flex-col max-sm:flex-col max-sm:gap-5 max-md:gap-5"
    >
      {/* Left panel About me */}
      <div className="flex flex-col gap-2 w-[50%] max-sm:w-[100%] max-md:w-[100%]">
        <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#DDDDDF] font-semibold mb-5">About Me</h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={0.7}
          className="text-[#DDDDDF] text-sm md:text-base lg:text-lg"
        >
          I'm a front-end developer who turns ideas into clean, responsive React interfaces, and I care about more than just writing code — I care about how things feel, how they work, and how they hold up when real users interact with them.
        </motion.p>

 <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={0.7}
          className="text-[#DDDDDF] text-sm md:text-base lg:text-lg"
        >
          If you work with me, you get someone who pays attention to both UX and clean, maintainable code — the kind that makes products feel reliable, not fragile or rushed. And honestly, I don't believe in staying in one place for too long; I'm always building, learning, and pushing myself to improve with every project I touch.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={0.7}
          className="text-[#DDDDDF] text-sm md:text-base lg:text-lg"
        >
           I joined Digital Egypt Pioneers Initiative (DEPI), I worked on real-world challenges that pushed me to think beyond implementation and start thinking like someone building actual products, not just features.
        </motion.p>



        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={0.7}
          className="text-[#DDDDDF] text-sm md:text-base lg:text-lg"
        >
          Along the way, I got to be part of a team that won{" "}
          <a href="https://drive.google.com/file/d/1gDVBngSFkN1OJa38PGFaRISW4gfQiqFN/view" className="underline cursor-pointer">
            a Best Project Award
          </a>
          , which really showed me how much impact good communication, teamwork, and problem-solving can have when everything clicks together. I learned that strong products aren't built alone — they're shaped through collaboration and constant iteration.
        </motion.p>

       
      </div>

      {/* Right Panel Coding picture */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={0.7}
        className="rounded-xl p-6 font-mono text-sm overflow-x-auto shadow-lg bg-[rgba(6,4,18,0.95)] border-1 border-[rgba(147,51,234,0.3)] pr-20 relative bottom-100 max-md:w-[100%]"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-gray-500 text-xs">Developer.jsx</span>
        </div>

        <pre className="text-purple-300 leading-7">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-yellow-300">developer</span> = {"{"}{"\n"}
          {"  "}<span className="text-green-300">name</span>:{" "}
          <span className="text-orange-300">"Rudaina Aly"</span>,{"\n"}
          {"  "}<span className="text-green-300">role</span>:{" "}
          <span className="text-orange-300">"Frontend Developer"</span>,{"\n"}
          {"  "}<span className="text-blue-400">skills</span>: [{"\n"}
          {"    "}<span className="text-orange-300">"React"</span>,{" "}
          <span className="text-orange-300">"TypeScript"</span>,{"\n"}
          {"    "}<span className="text-orange-300">JavaScript"</span>,{" "}
          <span className="text-orange-300">"CSS Wizardry"</span>{"\n"}
          {"  "}],{"\n"}
          {"  "}<span className="text-blue-400">  strengths</span>: [{"\n"}
          {"    "}<span className="text-orange-300">"Problem Solving"</span>,{" \n"}
          {"    "}<span className="text-orange-300">"Component Design"</span>,{"\n"}
          {"    "}<span className="text-orange-300">"Interactive Interfaces"</span>{" "}
          {"\n"} {" "}]{"\n"}
          {"  "}<span className="text-purple-300">motivation</span>:{" "}
          <span className="text-blue-400">function</span>() {"{"}{"\n"}
          {"    "}<span className="text-pink-400">return</span>{" "}
          <span className="text-orange-300">"Building cool stuff!"</span>;{"\n"}
          {"  "}{"}"}{"\n"}
          {"}"};
        </pre>
        <div
          className="mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-gray-600">{"// Complex problems deserve simple solutions."}</span>
          <br />
          <span className="text-gray-600">{"// I don't build pages. I build experiences."}</span>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutMe
