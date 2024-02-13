import Header from "../Shared/Header/Header";
import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navber from "../Shared/Navber/Navber";
import RightSideNave from "../Shared/RightSideNav/RightSideNave";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border"><LeftSideNave></LeftSideNave></div>
                <div className="border text-3xl md:col-span-2">
                    fuad
                </div>
                <div className="border"><RightSideNave></RightSideNave></div>
            </div>
           
            
        </div>
    );
};

export default Home;
