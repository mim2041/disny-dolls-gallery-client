

const Features = () => {
    return (
        <div className="bg-pink-200 px-12 lg:px-24 py-12 text-center mt-12">
            <h1 className="title text-5xl mb-6 text-pink-600 text-center">These Are Our Features</h1>
            <p className="lg:w-3/4 mx-auto">A toy website can help children develop in several ways. a well-designed toy website can provide a range of toys and resources that cater to different aspects of child development. It can serve as a valuable tool for parents, caregivers, and children to explore, learn, and engage in play that supports their growth and learning.</p>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center'>
                <div className='bg-blue-200 shadow-xl rounded-lg lg:m-2 lg:w-[200px] border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px] h-[150px] rounded-lg' src="https://i.ibb.co/HpbS0SQ/feature1.jpg" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Cognitive Development</h1>
                    <p>Toy websites can offer a wide variety of educational toys that promote cognitive development.  These toys can enhance problem-solving skills, logical thinking, memory, and critical reasoning abilities.</p>
                    </div>
                </div>
                <div className='bg-green-200 shadow-xl rounded-lg m-2 lg:w-[200px] border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px] h-[150px] rounded-lg' src="https://i.ibb.co/z284B5Q/feature2.jpg" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Creativity and Imagination</h1>
                    <p>Toy websites can provide access to toys that encourage creativity and imagination. Arts and crafts materials, building blocks, role-playing toys, and open-ended play items can inspire children to think creatively.</p>
                    </div>
                </div>
                <div className='bg-orange-200 shadow-xl lg:w-[200px]  m-2 rounded-lg border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://i.ibb.co/XDxzybf/feature3.jpg" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Social and Emotional Development</h1>
                    <p>Toy websites can feature toys that support social and emotional development. Cooperative board games, pretend play toys, and dolls can encourage social interaction, sharing, empathy, and communication skills.</p>
                    </div>
                </div>
                <div className='bg-yellow-100 shadow-xl m-2 lg:w-[200px] rounded-lg border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://i.ibb.co/5xphQ91/feature4.jpg" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Educational Content</h1>
                    <p>Toy websites can provide educational content in the form of blogs, articles, or videos related to child development, parenting tips, and learning resources. This information can guide parents and caregivers in selecting appropriate toys.</p>
                    </div>
                </div>
                
                <div className='bg-sky-200 shadow-xl  m-2 lg:w-[200px] rounded-lg border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://i.ibb.co/yNc4tfm/feature5.jpg" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Diversity and Inclusion</h1>
                    <p> Toy websites can showcase a diverse range of toys that reflect different cultures, ethnicities, abilities, and backgrounds. By promoting inclusivity, children can learn about and appreciate diversity, fostering acceptance, and understanding.</p>
                    </div>
                </div>
                
                <div className='bg-violet-200 shadow-xl rounded-lg m-2 lg:w-[200px] border-[2px, solid, black]'>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://i.ibb.co/Dtq9n3M/feature6.png" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Parental Involvement</h1>
                    <p>Toy websites can encourage parental involvement by providing guidance on toy selection, age-appropriate toys, and playtime ideas. We offer insights into how parents can actively participate in their childs learning and development.</p>
                    </div>
                </div>
                
                
                

            </div>
        </div>
    );
};

export default Features;