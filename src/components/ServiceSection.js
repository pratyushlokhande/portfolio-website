import React from "react";

// Import Styled Component
import styled from "styled-components";
import { About, Description, Hide, Image } from "../styles";

const ServiceSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src="//unsplash.it/50" alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src="//unsplash.it/51" alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src="//unsplash.it/52" alt="" />
              <h3>Worth it</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src="//unsplash.it/53" alt="" />
              <h3>Easy</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src="//unsplash.it/500" alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
    }

    h3 {
      margin-left: 1rem;
      background-color: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default ServiceSection;
