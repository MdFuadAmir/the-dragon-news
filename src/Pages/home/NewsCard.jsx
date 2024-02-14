import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { title,image_url,details,_id } = aNews;
  return (
    <div className="card card-compact space-y-3 p-4 border mt-8 bg-base-100 shadow-xl">
        <h2 className="card-title">{title}</h2>
      <figure>
        <img
          className="w-full"
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        {
        details.length > 200 ? <p>{details.slice(0,200)}
        <Link to={`/news/${_id}`} className="text-orange-600"> Read More...</Link></p>
        :  <p>{details}</p>
        }
        
      </div>
    </div>
  );
};
export default NewsCard;
NewsCard.PropTypes = {
  aNews: PropTypes.object,
};
