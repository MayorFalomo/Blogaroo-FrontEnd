import React, { useContext, useState } from "react";
import { StyledHero } from "./Hero.styled";
import HeroPost from "./HeroPost";
import Carousel from 'nuka-carousel';
import { AppContext } from "../../helper/Context";
type Props = {};

const Herosection = (props: any) => {
  
  const {loading, completed} = useContext(AppContext)
  const heroPost = props.posts;

 
  return (
    <StyledHero>
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loaders">
              <span className="loader"></span>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <div className="heroPostContainer" style={{ display: "flex", flexDirection: "column" }}>
            <Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={6000} swiping={false} withoutControls={true}>
              {heroPost.map((heroPost: any) => (
                <div className="subHeroPost" key={heroPost._id}>
                  <HeroPost heroPost={heroPost} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </StyledHero>
  );
};

export default Herosection;
