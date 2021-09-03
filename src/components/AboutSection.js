import React from "react";

// Import Styled Component
import { About, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          eius officiis harum dolorem sequi ipsa.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src="//unsplash.it/360/480" alt="homeImage" />
      </Image>
    </About>
  );
};

export default AboutSection;
