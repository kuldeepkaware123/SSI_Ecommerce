import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// home page

const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));


// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));
const ShopGridFullWidth = lazy(() => import("./pages/shop/ShopGridFullWidth"));
const ShopListStandard = lazy(() => import("./pages/shop/ShopListStandard"));
const ShopListFullWidth = lazy(() => import("./pages/shop/ShopListFullWidth"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));


// blog pages
const BlogStandard = lazy(() => import("./pages/blog/BlogStandard"));
const BlogDetailsStandard = lazy(() =>
  import("./pages/blog/BlogDetailsStandard")
);

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>

            <Route
              path={process.env.PUBLIC_URL + "/"}
              element={<HomeElectronics />}
            />

            {/* Shop pages */}
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-standard"}
              element={<ShopGridStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-filter"}
              element={<ShopGridFilter />}
            />


            <Route
              path={process.env.PUBLIC_URL + "/shop-grid-full-width"}
              element={<ShopGridFullWidth />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/shop-list-standard"}
              element={<ShopListStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/shop-list-full-width"}
              element={<ShopListFullWidth />}
            />


            {/* Shop product pages */}
            <Route
              path={process.env.PUBLIC_URL + "/product/:id"}
              element={<Product />}
            />


            {/* Blog pages */}
            <Route
              path={process.env.PUBLIC_URL + "/blog-standard"}
              element={<BlogStandard />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/blog-details-standard"}
              element={<BlogDetailsStandard />}
            />

            {/* Other pages */}
            <Route
              path={process.env.PUBLIC_URL + "/about"}
              element={<About />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/contact"}
              element={<Contact />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/my-account"}
              element={<MyAccount />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/login-register"}
              element={<LoginRegister />}
            />

            <Route
              path={process.env.PUBLIC_URL + "/cart"}
              element={<Cart />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/wishlist"}
              element={<Wishlist />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/compare"}
              element={<Compare />}
            />
            <Route
              path={process.env.PUBLIC_URL + "/checkout"}
              element={<Checkout />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;