import { Link } from "@remix-run/react";
import Header from "~/Components/header";


export default function About() {
    return (
        <>
            <Header />
        <div className="flex flex-col items-center justify-center h-screen">

            <h1 className="text-4xl font-bold">Welcome to the about page</h1>
            <Link to="/">Go back to the home page</Link>
        </div>
        </>
    )
}