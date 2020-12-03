import React from "react";
import image from "img/Philosophy-and-Modern-Language.png";
import styled from "styled-components";
import Image from "react-bootstrap/Image";

// const Img = styled(Image)`
//   max-width: 100%;
// `;

const Quoter = () => {
  return (
    <div data-testid="main-img">
      <Image width="100%" src={image} />
    </div>
  );
};

export default Quoter;
