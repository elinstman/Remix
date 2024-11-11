import { AdvancedImage } from "@cloudinary/react";
import { Link } from "@remix-run/react";
import cld from "~/utils/cloudinary/cloudinary";

export default function Latest() {
    return (
        <section className="flex justify-center items-center w-full bg-gray-100">
             <div className="mt-20 p-12">
               <h1 className="text-4xl font-normal text-center mb-10">Explore, Relax, Enjoy</h1>
               <div className="grid grid-cols-5 gap-4 items-center">
               <AdvancedImage cldImg={cld.image('photo-173')} className="hover:scale-105 transition-transform duration-300"/>
               <AdvancedImage cldImg={cld.image('photo-172')} className="hover:scale-105 transition-transform duration-300"/>
               <AdvancedImage cldImg={cld.image('photo-174')} className="hover:scale-105 transition-transform duration-300"/>
               <AdvancedImage cldImg={cld.image('photo-180')} className="hover:scale-105 transition-transform duration-300"/>
               <AdvancedImage cldImg={cld.image('photo-900')} className="hover:scale-105 transition-transform duration-300"/>
            
               </div>
            </div>
    </section>
    )
}