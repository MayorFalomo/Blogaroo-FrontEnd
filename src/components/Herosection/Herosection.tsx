import React, { useState } from "react";
import { StyledHero } from "./Hero.styled";
import HeroPost from "./HeroPost";

type Props = {};

const Herosection = (props: any) => {
  const [index, setIndex] = useState<number>(1);
  const heroPost = props.posts.slice(-1);

  return (
    <StyledHero>
      {heroPost.map((heroPost: any) => (
        <div key={heroPost._id}>
          <HeroPost heroPost={heroPost} />
        </div>
      ))}
    </StyledHero>
  );
};

export default Herosection;
