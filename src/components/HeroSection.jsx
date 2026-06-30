import { Settings, Code, ChevronRight, ChevronLeft, ArrowDown  } from 'lucide-react';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll'
import triviaImg from '../assets/trivia.png'
import dashboardImg from '../assets/dashboard.png'
import binwiseImg from '../assets/BinWise.png'

const HeroSection = () => {

    const projGradient = [{ from: "#7c3aed", to: "#db2777", img: triviaImg},
              { from: "#3b82f6", to: "#7c3aed", img: dashboardImg },
              { from: "#7c3aed", to: "#5b21b6", img: binwiseImg },]
return (
    <motion.header
    id="Home"
    className = "backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px] flex flex-col md:flex-col items-start  gap-5 md:gap-10"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    >
        <div className = " flex gap-5">
            <Code className="text-[#A352BF]" size={48} />
            <Settings  className="text-[#be68de]" size={48} />
        </div>
        
        <h1 className = "text-[#DDDDDF] text-2xl md:text-4xl lg:text-6xl font-bold leading-tight md:leading-[4rem]">
            Hi there! I'm <span className= "ml-10 flex items-center bg-gradient-to-r from-[#b76bd1] to-[#813d9a] text-transparent bg-clip-text"><ChevronLeft color= '#812c9e' size={60}/>Rudaina Aly<ChevronRight color= '#b45cd4' size={60}/></span>
            Front-end developer
        </h1>
        <p className = "text-[#A3A2A4] text-sm md:text-base lg:text-xl font-semibold leading-relaxed md:leading-[2.5rem]">
            I build modern React interfaces with clean architecture, smooth interactions, and thoughtful user experiences.
            </p>
{/* CTA buttons */}
            <div className='flex flex-col gap-5 md:flex-row lg:flex-row'>
                <Link 
                to='Projects'
                smooth = {true}
                duration={500}
                className='bg-gradient-to-r from-[#A352BF] via-[#be68de] to-[#7c498d] p-5 rounded-2xl  shadow-purple-700 shadow-md text-[#DDDDDF] font-bold hover:-translate-y-5 transition-all duration-300 cursor-pointer'>
                   See Projects →
                </Link>
                <a 
                href='https://docs.google.com/document/d/1wAWiFh_yiGkPYvh3GVpTYaE3qbLqNn0M/edit?usp=sharing&ouid=113760562214749424633&rtpof=true&sd=true'
                className='text-[white] p-5 underline text-lg md:text-2xl hover:-translate-y-5 hover:text-[#A352BF] transition transiton-all duration-300'>
               View CV   
                </a>
   </div>
                {/* Projects preview */}
                <p className='text-[#A3A2A4]'>click on the picture to view project</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:gird-cols-3 gap-6  md:min-w-full'>
                {projGradient.map((gradient, i) => (
              <div
                key={i}
            className='rounded-xl p-px '
                style={{
                  background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
                }}
              >
                
                <Link to = 'Projects' smooth = {true} duration = {500}
                  className="rounded-xl h-48 flex items-center justify-center cursor-pointer"
                  style={{ background: "#0f0a1e" }}
                >
                  <img src={gradient.img} alt="proj"  className='w-[100%] h-[100%] rounded-xl hover:opacity-20' />

                </Link>
              </div>
            ))}
            </div>

            <div
            className = "h-20 w-20 border-2 border-[#A352BF] rounded-full text-[#A352BF] slef-center flex justify-center items-center animate-bounce self-center mt-5"
            >
                <ArrowDown size={42}/>
            </div>
    </motion.header>

)
}
export default HeroSection