import { useEffect } from 'react';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import Aos from 'aos';

const Develop = () => {
    
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="develop bg-pink-200 px-12 flex-col lg:px-24 py-12">
            <div>
                <div className='flex flex-col-reverse lg:flex-row w-full gap-12 justify-between lg:mb-24'>
                    <div className='lg:w-1/2  my-auto'>
                        <h1 className="title text-5xl text-pink-600 mb-6">Let Your Child's Mind Develop</h1>
                        <p>Select toys that are suitable for the child's age and developmental stage. To develop a child's mind, one should choose toys that promote interaction and social engagement. Cooperative games, board games, and interactive toys that require collaboration or turn-taking can enhance communication skills, teamwork, and problem-solving abilities.</p>
                    </div>
                    <div className='lg:w-1/2'>
                        <img data-aos="flip-left" data-aos-delay="100" className='rounded-lg w-full' src={image1} alt="" />
                    </div>
                </div>

                <div className='flex flex-col m-5 lg:flex-row w-full gap-12 justify-between mb-12'>
                    <div className='lg:w-1/2'>
                        <img data-aos="flip-left" data-aos-delay="100" className='rounded-lg lg:w-3/4' src={image2} alt="" />
                    </div>
                    <div className='lg:w-1/2 lg:text-right my-auto'>
                        <h1 className="title text-5xl text-pink-600 mb-6">Develop Your Child's Creativity</h1>
                        <p>Choose toys that are designed to be educational and promote learning. Look for toys that encourage problem-solving, critical thinking, creativity, and development of fine motor skills. Examples include building blocks, puzzles, STEM kits, art supplies, and language-learning toys. Age-appropriate toys help stimulate the child's cognitive abilities and provide appropriate challenges. They are designed to match the child's abilities and interests, allowing them to explore and learn at their own pace.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Develop;