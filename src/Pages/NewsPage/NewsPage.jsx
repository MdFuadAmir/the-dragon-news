import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNave from "../Shared/RightSideNav/RightSideNave";
import Navber from "../Shared/Navber/Navber";

const NewsPage = () => {
  const { id, thumbnail_url } = useParams();
  return (
    <div>
      <Header></Header>
      <div className="mt-6">
        <Navber></Navber>
      </div>

      <div className="mt-8 gap-4 grid md:grid-cols-4">
        <div className="col-span-3 p-3">
          <h2 className="text-xl font-bold mb-4">Dragon News</h2>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src={thumbnail_url}
                alt="banner"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNave></RightSideNave>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
