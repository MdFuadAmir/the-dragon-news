import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex gap-3 bg-gray-200 p-3 my-6">
            <button className="btn btn-secondary rounded-none">Latest</button>
            <Marquee pauseOnHover={true} speed={150} className="gap-8">    
            <Link to='/'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...... </Link>
            <Link to='/'> I can be a React component, multiple React components, or just some text...... </Link>
            </Marquee> 
        </div>
    );
};

export default BreakingNews;