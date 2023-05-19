import { useEffect, useState } from "react";
import './Gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => {
                setImages(data)
            })
    } ,[])

    return (
        <div className="bg-pink-100 my-12 p-12 text-center">
            <h1 className="title text-pink-600 text-4xl">Visit Our Gallery</h1>
            <p>Our gallery is enriched with a lot of fairy toys. Look at our gallery section for a glimpse of our features. </p>

            <div className="mt-12 mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    images.map(image => <img
                        key={image._id}
                    src={image.picture} className="w-72 h-72 gallery"/>)
                }
            </div>
        </div>
    );
};

export default Gallery;