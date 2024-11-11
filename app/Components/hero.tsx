import cld from "~/utils/cloudinary/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Link } from "@remix-run/react";

export default function Hero() {
    return (
        <section className="w-full relative h-[550px] overflow-hidden">
            <div className="relative w-full h-full"> 
                <AdvancedImage className="absolute inset-0 w-full h-full object-cover object-center" cldImg={cld.image('cld-sample-2')} />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-white text-4xl z-10">Welcome to the Wilderness</h1>
                    <Link to="/book">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Book Now</button>
                    </Link>
                </div>
        </section>
    )
}