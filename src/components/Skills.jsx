import {  motion } from "motion/react"
import {CodeXml ,  Smartphone ,  Zap  } from 'lucide-react'

  const Skills = () => {

    const skills = [
        {id: 1, title: "Frontend Development", icon:< CodeXml size = {32} style={{color:"#a855f7", }}/>,iconColor:"#a855f7", skills: ['React', "JavaScript", "TypeScript", "HTML5/CSS", "TailwindCSS", "Next.js"]},
        {id: 2, title: "Mobile & Responsive", icon:<Smartphone size = {32} style={{color:"#60a5fa", }}/>, iconColor: "#60a5fa", skills: ['Responsive Design', 'Mobile First', 'Progressive Web Apps']},
        {id: 3, title: "Tools & Workflow", icon: <Zap size={32} style={{color:"#fbbf24"}}/>, iconColor: "#fbbf24" ,skills:['Git', 'GitHub', 'Vs Code', 'Vite']}
    ]

    return (
<motion.section 
id="Skills"
initial= {{opacity: 0, y:50}}
whileInView={{opacity: 1, y: 0}}
transition = {{duration:0.7}}
className="backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px] flex flex-col md:flex-col items-start  gap-5 md:gap-10"
>
 <div>
       <h2 className="text-6xl text-[#DDDDDF] font-semibold ">Skills & Technologies</h2>
<p className="text-gray-400 text-lg mb-10 leading-10">
                A collection of tools and technologies I use to bring ideas to life
              </p>
 </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skills.map((skill)=> (
            <motion.div
            key={skill.id}
            initial = {{opacity: 0, x: 50}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration: 0.7}}
            whileHover={{ 
    y: -16,
    borderColor: "rgba(147,51,234,0.45)"
  }}
            className="bg-[rgba(6,4,18,0.6)] border-1 border-solid rounded-2xl border-[rgba(147,51,234,0.15)] p-5 "
            >

                <div className="mb-4" style={{color: skill.color}}>{skill.icon}</div>
                <h3 className="text-white text-2xl font-medium mb-4">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {skill.skills.map((skill, i)=> (
                        <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-full bg-[rgba(147,51,234,0.15)] border-1 border-[rgba(147,51,234,0.3)] text-[#d8b4fe]"
                        >{skill}</span>
                    ))}
                </div>
            </motion.div>
        ))}
    </div>
</motion.section>
    )
}
export default Skills
