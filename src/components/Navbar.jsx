const Navbar = () => {
  return (
    <div className="navbar py-7 flex justify-between items-center">
        <div className="logo">
            <h1 className="text-3xl font-bold text-[#BFA181]">Feza's Portfolio</h1>
        </div>
        <ul className="menu flex items-center gap-10">
            <li><a className="text-lg font-semibold hover:text-orange-500" href="#home">Home</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-500" href="#about">About</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-500" href="#projects">Projects</a></li>
            <li><a className="text-lg font-semibold hover:text-orange-500" href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar