import { motion } from "motion/react"
import Exp from '../Data/Exp.json'
import { Triangle, Calendar, Briefcase } from 'lucide-react';
import { div, li, ul } from "motion/react-client";


const Experience = () => {
    return (

        <motion.section
        id="Experience"
        initial = {{opacity: 0, y:50}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.7}}
        className = "backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px] flex flex-col md:flex-col items-start  gap-3 md:gap-10"
        >
            <div >
                <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#DDDDDF] font-semibold">Experience</h2>
             <p className="text-gray-400 text-sm md:text-lg mb-5 leading-8 md:leading-10">
                My professional journey in the world of web development
              </p>
            </div>

            {Exp.map((exp)=> (
                
                <motion.div
                key = {exp.id}
                 initial = {{opacity: 0, x: 50}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration: 0.75}}
           whileHover={{ 
    y: -16,
    borderColor: "rgba(147,51,234,0.45)"
  }}
            className="bg-[rgba(6,4,18,0.6)] border-1 border-solid rounded-2xl border-[rgba(147,51,234,0.15)] p-5 flex flex-col gap-3 hover:translate-y-2"
                >
                  <div className="flex flex-col md:flex-row justify-between  gap-2">
                      <div className="flex items-center gap-3 mb-1">
                    
                        <h3 className="text-white text-lg md:text-2xl lg:text-3xl font-medium">
                        {exp.role}
                    </h3>
                
                      </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar size={16} />
                        <p>{exp.period}</p>
                    </div>
                  </div>
                      <p className="text-sm md:text-base font-medium ml-9 bg-gradient-to-br from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">{exp.title}</p>
                  <p className="text-[#DDDDDF] text-sm md:text-base">{exp.description}</p>
                  
                    {exp.highlights.map((highligh, i) => (
                    <ul>
                            <li
                        key={i}
                        className="list-none text-[#A3A2A4] flex gap-2 items-center text-sm"
                        
                        > < Triangle className="rotate-90 text-[#a855f7] " size={7}/>{highligh}</li>
                    </ul>
                    ))}

                    <h4 className="text-base md:text-xl text-white font-bold">Certificates</h4>
                      <ul
                        className="list-none flex  gap-2"
                        >
                    {exp.certificates.map((cert,i) => (
                            <li 
                            key={i}
                            className="text-gray-500 underline hover:text-[#a855f7] transition-all duration-500"><a href={cert}>Certificate {i + 1}</a></li>
                    ))}
                      </ul>
                </motion.div>
               
            ))}

        </motion.section>
    )
}

export default Experience