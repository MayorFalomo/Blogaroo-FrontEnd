import React, { useState } from "react";
import { StyledHero } from "./Hero.styled";
import HeroPost from "./HeroPost";
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
import Carousel from 'nuka-carousel';
import Preload from "../preload/Preload";
type Props = {};

const Herosection = (props: any) => {
  
  const heroPost = props.posts;

 
  return (
    <StyledHero>
     
          <div className="heroPostContainer" style={{ display: "flex", flexDirection: "column" }}>
            <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={6000} withoutControls={true}>
              {heroPost.map((heroPost: any) => (
                <div className="subHeroPost" key={heroPost._id}>
                  <HeroPost heroPost={heroPost} />
                </div>
              ))}
            </Carousel>
          </div>
    </StyledHero>
  );
};

export default Herosection;
