import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LeftSideNave = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="p-3">
            {/* navbers */}
            <div>
            <h2 className="text-2xl font-bold mb-4">All Caterogy</h2>
            <div>
            {categories.map(category => <Link className="block ml-4 font-semibold hover:bg-gray-200 rounded-lg  p-6" key={category.id}>{category.name}</Link> )}
            </div>
            </div>            
        </div>
    );
};

export default LeftSideNave;