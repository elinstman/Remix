import { AdvancedImage } from "@cloudinary/react";
import { Link } from "@remix-run/react";
import cld from "~/utils/cloudinary/cloudinary";

export default function Teaser() {
    return (
        <section className="flex flex-col items-center min-h-screen w-full">
            <div className="grid grid-cols-2 gap-4 w-full bg-gradient-to-l from-gray-200 to-white">
                <div>
                    <AdvancedImage cldImg={cld.image('samples/animals/reindeer')}/>
                </div>
                <div className="flex flex-col gap-4 p-12">
                   <h1 className="text-4xl font-normal">Our Story</h1>
                   <div className="flex flex-col gap-4">
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                   <Link to="/about">
                   <button className="bg-gray-500 p-1 text-white px-2 rounded hover:bg-gray-200 hover:text-gray-500 hover:text-lg transition-transform duration-600">Learn More</button>
                   </Link>
                   </div>
                </div>
                
            </div> 
        </section>
    )
}