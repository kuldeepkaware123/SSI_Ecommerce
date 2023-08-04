import PropTypes from "prop-types";
import clsx from "clsx"
import categoryData from "../../data/category/category-one.json";
import CategoryOneSingle from "../../components/category/CategoryOneSingle.js";

// swiper slider settings

const CategoryOneSlider = ({ spaceBottomClass }) => {
  return (
    <div
      className={clsx("collections-area", spaceBottomClass)}
    >
      <div className="container">
        <div className="collection-wrap-2 d-flex flex-wrap">

          {categoryData.map((single) => (
            <CategoryOneSingle
              data={single}
            />

          ))}

        </div>
      </div>
    </div>
  );
};

CategoryOneSlider.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default CategoryOneSlider;
