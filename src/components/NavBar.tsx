import logo from '@assets/Logo.png'

const NavBar = () => {
  return (
    <nav className = "flex flex-row justify-between items-center w-full py-4 px-8 border-b border-gray-100 sticky top-0">
        <div className = "flex flex-row items-center gap-2 w-md">
            <img src={logo.src} alt="Aster.motion Logo" className="w-8 h-8"/>
            <div className = "text-gray-400 flex flex-row items-center justify-between px-2 py-1 border border-gray-200 rounded-lg cursor-pointer gap-3 hover:bg-gray-50">
                <p className = "text-sm">Search Docs...</p>
                <div className = "p-1 bg-gray-100 rounded-lg text-gray-400 border border-gray-200">
                    <p className = "text-sm">cntrl+k</p>
                </div>
            </div>
        </div>
        <div className = "flex flex-row gap-4">
            <ul className='flex flex-row gap-4'>
                <li className = "text-gray-500 hover:text-primary cursor-pointer">Compoennts</li>
                <li className = "text-gray-500 hover:text-primary cursor-pointer">Design System</li>
                <li className = "text-gray-500 hover:text-primary cursor-pointer">Change Log</li>
                <li className = "text-gray-500 hover:text-primary cursor-pointer">Feedback</li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar