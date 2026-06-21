import { Menu } from 'lucide-react'
import { Link } from 'react-scroll'
import { useState } from 'react'
import MyLogo from '../assets/MyLogo.png'

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Skills" },
        { id: 4, link: "Projects" },
    ]

    return (
        <nav className=" fixed  top-3 left-1/2 -translate-x-1/2 flex justify-between items-center  py-3 px-5 border-2 border-[#42374f]  rounded-3xl max-sm:border-none z-50 min-w-[50%] max-md:min-w-[80%] max-sm:w-full bg-[rgba(15,10,30,0.1)] backdrop-blur-xl shadow-2xl">
        

            <div className='w-12 h-12'>
                <img src={MyLogo} alt="Rud Logo" className='w-full h-full '/>
            </div>

            <Menu
                className="text-[#A3A2A4] md:hidden lg:hidden cursor-pointer"
                size={28}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Mobile dropdown */}
            <ul className={`flex flex-col gap-5 list-none items-center absolute top-full left-0 w-full bg-[rgba(15,10,30,0.75)] backdrop-blur-xl shadow-2xl rounded-3xl p-5 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
                {links.map(link => (
                    <li key={link.id} className="cursor-pointer text-[#A3A2A4] hover:text-[#A352BF] hover:font-bold transition duration-300">
                        <Link to={link.link} smooth={true} duration={500} onClick={() => setIsMenuOpen(false)}>
                            {link.link}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Desktop links */}
            <ul className="flex gap-10 list-none items-center max-md:hidden text-[#A3A2A4] text-md font-semibold">
                {links.map(link => (
                    <li key={link.id} className="cursor-pointer hover:text-[#A352BF] hover:font-bold  transtion duration-300 *:after:content-[''] after:block after:w-full after:h-[3px] after:bg-[#A352BF] after:rounded-3xl  after:scale-x-0 hover:after:scale-x-100 after:origin-top-left after:transition-transform after:ease-in-out after:duration-300">
                        <Link to={link.link} smooth={true} duration={500}>{link.link}</Link>
                    </li>
                ))}
                <Link  to='Contact' smooth={true} duration= {500} 
                className="bg-gradient-to-r to-[#A352BF] from-[#67287c] text-white px-4 py-2 rounded-xl hover:scale-105 active:scale-90 transition-transform duration-300 cursor-pointer">
                   Contact
                </Link>
            </ul>
        </nav>
    )
}

export default Nav