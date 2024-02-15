import Navber from "../Shared/Navber/Navber";
import image from "../../assets/01-Homepage.avif"

const Career = () => {
    return (
        <div>
            <Navber></Navber>
            <h2 className="text-4xl font-bold text-center my-4">Cerrer Page</h2>
            <div className="my-8">
                <img className="w-full h-full" src={image} alt="" />

            </div>
            
        </div>
    );
};

export default Career;