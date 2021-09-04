import React from "react";
import Banner from "../components/banner/Banner";
import BeSpoke from "../components/Bespoke/Bespoke";
import Header from "../components/layout/Header";
import Whatsnew from "../components/gridcards/WhatsNew";
import NewInProducts from "../components/gridcards/NewInProducts";
import BestSelling from "../components/gridcards/BestSelling";
import InstaFeed from "../components/instafeed/InstaFeed";
import Layout from "../components/layout/Layout";
import CardCarousel from "../components/gridcards/CardCarousel";

const Landing = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Whatsnew />
        <BeSpoke />
        <CardCarousel />
        {/* <NewInProducts/> */}
        <BestSelling />
        <InstaFeed />
      </Layout>
    </>
  );
};

export default Landing;
