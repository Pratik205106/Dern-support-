import { NavLink, Outlet } from "react-router"
import { ToastContainer } from "react-toastify"

const MainLayOut = () => {
  return (
    <div className="grid grid-cols-2">
<header className="flex min-h-screen">
    <ToastContainer/>
    <nav className="bg-yellow-600 p-6">
        <ul className="grid items-center justify-evenly space-y-20">
            <li className="text-white font-medium">
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className="text-white font-medium">
                <NavLink to='/request'>Request Performance</NavLink>
            </li>
            <li className="text-white font-medium">
                <NavLink to='/article'>Article</NavLink>
            </li>
            <li className="text-white font-medium">
                <NavLink to='/user'>User</NavLink>
            </li>
        </ul>
    </nav>
</header>
<main>
    <Outlet/>
</main>
    </div>
  )
}

export default MainLayOut;