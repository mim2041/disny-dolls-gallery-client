import { useEffect, useState } from "react";
import './Gallery.css';

import 'aos/dist/aos.css';
import Aos from "aos";

const Gallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://disney-dolls-gallery-server.vercel.app/gallery')
            .then(res => res.json())
            .then(data => {
                setImages(data)
            })
    } ,[]);

    // AOS package
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="bg-pink-100 my-12 p-12 text-center">
            <h1 className="title text-pink-600 mb-6 text-5xl">Visit Our Gallery</h1>
            <p>Our gallery is enriched with a lot of fairy toys. Look at our gallery section for a glimpse of our features. </p>

            <div className="mt-12 mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    images.map(image => <img  data-aos="zoom-in" 
                        key={image._id}
                    src={image.picture} className="w-72 h-72 gallery"/>)
                }
            </div>
        </div>
    );
};

export default Gallery;