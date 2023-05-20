import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const SubCategory = () => {
    const [subcategories,setSubcategories]=useState([])
    const [tabIndex,setTabIndex]=useState(0);
    const [allToys,setAllToys]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/subcategory')
        .then(res=>res.json())
        .then(data=>setSubcategories(data))
    },[])

    

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>setAllToys(data))
    },[])

    const disneyDolls= allToys.filter(toys=>toys.subcategory==='Disney Dolls')
    const frozenDolls= allToys.filter(toys=>toys.subcategory==='Frozen Dolls')
    const animationCharacters= allToys.filter(toys=>toys.subcategory==='Animation Characters')

    
    return (
        <div className='text-center '>
            <Tabs>
                <TabList>
                    {
                       subcategories?.map(sub=><Tab key={sub._id}>{sub.subcategory}</Tab>) 
                    }
               
                </TabList>

                <TabPanel>
                {
                   disneyDolls.length
                }
                </TabPanel>
                <TabPanel>
                {frozenDolls.length}
                </TabPanel>
                <TabPanel>
                {animationCharacters.length}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubCategory;