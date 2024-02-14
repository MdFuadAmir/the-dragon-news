import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNave from "../Shared/LeftSideNave/LeftSideNave";
import Navber from "../Shared/Navber/Navber";
import RightSideNave from "../Shared/RightSideNav/RightSideNave";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div><LeftSideNave></LeftSideNave></div>
                <div className="md:col-span-2 p-3">
                    <h2 className="text-xl font-semibold px-4">Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews.id} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div><RightSideNave></RightSideNave></div>
            </div>
           
            
        </div>
    );
};

export default Home;
