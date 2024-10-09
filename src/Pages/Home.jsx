import React from "react";
import HomeSlider from "../component/HomeSlider";
import HomeBanner1 from "../component/HomeBanner1";
import Categories from "../component/Categories";
import AllParfumes from "../component/AllParfumes";
import Collections from "../component/Collections";
import BlogSection from "../component/BlogSection";
function Home() {
  return (
    <div>
      <HomeSlider />
      <HomeBanner1 />
      <Categories />
      <AllParfumes />
      <Collections />
      <BlogSection />
    </div>
  );
}

export default Home;
