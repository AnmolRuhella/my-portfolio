'use client'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Anmol Ruhella</h3>
          <p className="text-sm text-gray-300">Frontend Developer</p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <a href="#home" className="hover:underline text-gray-300">Home</a>
          <a href="#about" className="hover:underline text-gray-300">About</a>
          <a href="#education" className="hover:underline text-gray-300">Education</a>
          <a href="#experience" className="hover:underline text-gray-300">Experience</a>
          <a href="#projects" className="hover:underline text-gray-300">Projects</a>
          <a href="#contact" className="hover:underline text-gray-300">Contact</a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Anmol Ruhella. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
