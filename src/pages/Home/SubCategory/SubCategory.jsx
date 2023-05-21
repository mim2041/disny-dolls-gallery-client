import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';

const SubCategory = () => {
    const [subcategories,setSubcategories]=useState([])
    // const [tabIndex,setTabIndex]=useState(0);
    const [allToys,setAllToys]=useState([]);


    useEffect(()=>{
        fetch('https://disney-dolls-gallery-server.vercel.app/subcategory')
        .then(res=>res.json())
        .then(data=>setSubcategories(data))
    },[])

    

    useEffect(()=>{
        fetch('https://disney-dolls-gallery-server.vercel.app/toys')
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    },[])

    const disneyDolls= allToys.filter(toys=>toys.subcategory==='Disney Dolls')
    const frozenDolls= allToys.filter(toys=>toys.subcategory==='Frozen Dolls')
    const animationCharacters= allToys.filter(toys=>toys.subcategory==='Animation Characters')

    
    return (
        <div className='text-center bg-sky-200 px-8 lg:px-24 py-12'>
            <h1 className='title text-5xl text-pink-700 mb-8'>Here is Our Sub Category Section</h1>
            <Tabs>
                <TabList className="mb-12">
                    {
                       subcategories?.map(sub=><Tab key={sub._id}>{sub.subcategory}</Tab>) 
                    }
               
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            disneyDolls.map(toy => <SubCategoryCard
                                key={toy._id}
                                toy={toy}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            frozenDolls.map(toy => <SubCategoryCard
                                key={toy._id}
                                toy={toy}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            animationCharacters.map(toy => <SubCategoryCard
                                key={toy._id}
                                toy={toy}
                            ></SubCategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;