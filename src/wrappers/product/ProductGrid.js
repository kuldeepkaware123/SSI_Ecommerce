import { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getProducts } from "../../helpers/product";
import ProductGridSingle from "../../components/product/ProductGridSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";


const settings = {
  loop: false,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 4
    }
  }
};
const ProductGrid = ({
  spaceBottomClass,
  category,
  type,
  limit
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, type, limit)

  return (
    <Fragment>

      <Swiper options={settings}>
        {prods.map((product, key) => (
          <SwiperSlide key={key}>
            <ProductGridSingle
              spaceBottomClass={spaceBottomClass}
              product={product}
              currency={currency}
              cartItem={
                cartItems.find((cartItem) => cartItem.id === product.id)
              }
              wishlistItem={
                wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )
              }
              compareItem={
                compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment >
  );
};

ProductGrid.propTypes = {
  spaceBottomClass: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  limit: PropTypes.number
};



export default ProductGrid;
