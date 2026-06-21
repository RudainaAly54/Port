import projects from '../Data/projects.json'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { X, ExternalLink } from 'lucide-react'
import { FaGithub } from "react-icons/fa";
import BinWise from '../assets/BinWise.png'
import dashboard from '../assets/dashboard.png'
import Mafioso from '../assets/Mafioso.png'
import trivia from '../assets/trivia.png'

const imageMap = {
    'src/assets/BinWise.png': BinWise,
    'src/assets/dashboard.png': dashboard,
    'src/assets/Mafioso.png': Mafioso,
    'src/assets/trivia.png': trivia,
}

const Projects = () => {
    const [clicked, setClicked] = useState(null)

    const gradientBtn = {
        background: "linear-gradient(135deg, #7c3aed 0%, #db2777 100%)",
    };

    const outlineBtn = {
        background: "transparent",
        border: "1px solid rgba(147,51,234,0.5)",
        color: "#d8b4fe",
    };

    const clickedProject = projects.find(p => p.id === clicked)

    return (
        <>
        <motion.section
            id="Projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl rounded-3xl p-12 md:p-20 max-w-6xl w-full shadow-2xl bg-[rgba(15,10,30,0.75)] border-[rgba(147,51,234,0.25)] border-[1px] flex flex-col items-start gap-5 md:gap-10"
        >
            <div className="w-full">
                <h2 className="text-6xl text-[#DDDDDF] font-semibold">Featured Projects</h2>
                <p className="text-gray-400 text-lg mb-10 leading-10">
                    Some of my recent work that I'm proud of
                </p>

                {projects.map(proj => (
                    <motion.div
                        key={proj.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.75 }}
                        whileHover={{ y: -16, borderColor: "rgba(147,51,234,0.45)" }}
                        className="bg-[rgba(6,4,18,0.6)] border-1 border-solid rounded-2xl border-[rgba(147,51,234,0.15)] p-5 flex flex-col gap-10 md:flex-row mb-5"
                    >
                        {/* Project Picture */}
                        <div className='w-full md:w-[50%]'>
                            <img src={imageMap[proj.imgSrc] ?? proj.imgSrc} alt="project picture" className='w-full h-full rounded-xl' />
                        </div>

                        {/* Project Info */}
                        <div className='flex flex-col gap-5 w-full md:w-[50%]'>
                            <h3 className='text-[#DDDDDF] text-4xl font-mono font-bold'>{proj.name}</h3>
                            <p className='text-[#A3A2A4]'>{proj.abstract}</p>
                            <div className='flex flex-wrap gap-3'>
                                {proj.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className='bg-[rgba(147,51,234,0.15)] text-xs text-[#d8b4fe] px-2 py-1 rounded-full border-1 border-[rgba(147,51,234,0.3)]'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                className='cursor-pointer text-[#d8b4fe] self-start underline underline-offset-2 hover:text-white transition-colors'
                                onClick={() => setClicked(proj.id)}
                            >
                                Grab a drink and dive into the detail  &#8594;
                            </button>

                            <div className="flex gap-3">
                                <a
                                    href={proj.live}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                                    style={gradientBtn}
                                >
                                    <ExternalLink size={15} />
                                    View Live
                                </a>
                                <a
                                    href={proj.github}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-purple-600/10"
                                    style={outlineBtn}
                                >
                                    <FaGithub size={15} />
                                    Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        {/*More details card — rendered via portal into document.body so it
            escapes any transformed ancestor (Framer Motion sections all carry
            a `transform` style, which would otherwise turn `position: fixed`
            into something relative to that section instead of the viewport) */}
        {createPortal(
            <AnimatePresence>
                {clicked && clickedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                            onClick={() => setClicked(null)}
                        />

                        {/* Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ duration: 0.3 }}
                            className="fixed  top-10 left-8 md:left-[10%]  lg:left-[20%] xl:left-[25%]  z-50  max-w-2xl max-h-[85vh] overflow-y-auto bg-[rgba(10,6,25,0.97)] border border-[rgba(147,51,234,0.35)] rounded-2xl shadow-2xl shadow-purple-900/40 p-10 flex flex-col gap-6"
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors cursor-pointer"
                                onClick={() => setClicked(null)}
                            >
                                <X size={24} />
                            </button>

                            {/* Project name */}
                            <h3 className='text-white text-4xl font-mono font-bold tracking-wide'>
                                {clickedProject.name}
                            </h3>

                            {/* Divider */}
                            <div className="h-px bg-[rgba(147,51,234,0.3)] w-full" />

                            {/* Abstract */}
                            <p className='text-gray-300 text-base leading-7'>{clickedProject.abstract}</p>

                            {/* Details */}
                            <p className='text-gray-400 text-sm leading-8'>{clickedProject.details}</p>

                            {/* Tech tags */}
                            <div className='flex flex-wrap gap-3'>
                                {clickedProject.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className='bg-[rgba(147,51,234,0.15)] text-xs text-[#d8b4fe] px-3 py-1 rounded-full border border-[rgba(147,51,234,0.3)]'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-[rgba(147,51,234,0.3)] w-full" />

                            {/* Action buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={clickedProject.live}
                                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={gradientBtn}
                                >
                                    <ExternalLink size={15} />
                                    View Live
                                </a>
                                <a
                                    href={clickedProject.github}
                                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-purple-600/10"
                                    style={outlineBtn}
                                >
                                    <FaGithub size={15} />
                                    Code
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>,
            document.body
        )}
        </>
    )
}

export default Projects