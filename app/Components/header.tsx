import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="bg-white shadow-md p-4 w-full relative z-10">
            <div className="container mx-auto flex items-center justify-start space-x-6">
            <h1 className="text-2xl font-normal">WILDLY</h1>
            <nav className="flex items-center gap-4">
                <Link className="hover:text-gray-500 hover:scale-105 transition-transform duration-300" to="/about">About</Link>
                <Link className="hover:text-gray-500 hover:scale-105 transition-transform duration-300" to="/">Home</Link>
                <Link className="hover:text-gray-500 hover:scale-105 transition-transform duration-300" to="/locations">Locations</Link>
            </nav>
        
            </div>
            

        </header>
    )
}