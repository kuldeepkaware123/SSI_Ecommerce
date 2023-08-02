import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import TabProduct from "../../wrappers/product/TabProduct";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeaturedTwo from "../../wrappers/blog-featured/BlogFeaturedTwo";

const HomeElectronics = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Electronics Home"
        description="Electronics home of flone react minimalist eCommerce template."
      />
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-95" />

        {/* tab product */}
        <TabProduct spaceBottomClass="pb-60" category="fashion" />

        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />

        {/* blog featured */}
        <BlogFeaturedTwo spaceBottomClass="pb-55" />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
