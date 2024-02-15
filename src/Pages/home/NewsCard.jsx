import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
const NewsCard = ({ aNews }) => {
  const { title,image_url,details,_id,total_view,rating,author } = aNews;
  return (
    <div className="card-compact space-y-3 border mt-8 bg-base-100 rounded-lg  shadow-xl">
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex justify-center">
          <div>  
            <img className="w-12 rounded-full" src={author?.img} alt="" />
          </div>
          <div className="ml-4 justify-center"> 
          <h3 className="font-bold text-lg">{author?.name}</h3>
          <p>{author?.published_date}</p>
          </div>

        </div>
        <div className="flex space-x-3 text-lg">
          <CiBookmark></CiBookmark>
          <CiShare2></CiShare2>
        </div>
      </div>
        <h2 className="card-title px-4">{title}</h2>
      <figure>
        <img
          className="w-full px-4"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body px-4">
        {
        details.length > 200 ? <p>{details.slice(0,200)}
        <Link to={`/news/${_id}`} className="text-orange-600"> Read More...</Link></p>
        :  <p>{details}</p>
        }
        <hr className="my-6"/>
        <div className="flex justify-between text-base pb-4">
          <div className="flex items-center">
          <div className="rating rating-md mr-4">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked/>
</div>
        <p>{rating?.number}</p>

          </div>
          <div className="flex items-center">
            <FaEye className="mr-4"></FaEye> <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
NewsCard.PropTypes = {
  aNews: PropTypes.object,
};
