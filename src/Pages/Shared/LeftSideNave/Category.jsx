import PropTypes from 'prop-types';

const Category = ({aNews}) => {
    const {image_url,title} = aNews;
    return (
        <div className="card w-full rounded-none mt-6">
  <figure><img src={image_url} alt="banner" /></figure>
  <div className="mt-4">
    <h2 className="">{title}</h2>
  </div>
</div>
    );
};

export default Category;
Category.propTypes ={
    aNews: PropTypes.object
}