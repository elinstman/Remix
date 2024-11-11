import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <header className="bg-white shadow-md p-4 w-full relative z-10">
            <div className="container mx-auto flex items-center justify-start space-x-6">
            <h1 className="text-2xl font-normal">Wildy</h1>
            <nav className="flex items-center gap-4">
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </nav>
        
            </div>
            

        </header>
    )
}