import React, { useEffect } from "react";
import Carousel from "./Carousels";
import styled, { css } from "styled-components";
import Card from "./components/Card";

let cardData = [
  {
    image: "https://i.postimg.cc/RhYnBf5m/er-slider.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/qBGQNc37/ro-slider.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  },
  {
    image: "https://i.postimg.cc/C12h7nZn/ms-1.jpg",
    mobileTitle: "Pre-Production",
    desktopTitle: ["Pre-Production", "Use Case"],
    paragraph: "How Stellantis is powering limitless learning with video"
  }
];

const Main = styled.article``;

const HeaderOne = styled.header`
  margin: ${(props) =>
    props.$width > 768 ? "6rem 0 1.5rem 0" : "4rem 0 1rem 0"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTwo = styled.header`
  margin-bottom: ${(props) => (props.$width > 768 ? "4.5rem" : "3rem")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTextOne = styled.text`
  width: ${(props) => (props.$width > 768 ? "100%" : "21.563")};
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #3d4751;
`;
const HeaderTextTwo = styled.text`
  width: ${(props) => (props.$width > 768 ? "100%" : "21.563")};
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$width > 768 ? "4.5rem" : "2.5rem")};
  line-height: 100%;
  text-align: center;
  letter-spacing: ${(props) => (props.$width > 768 ? "-0.05em" : "-0.04em")};
  color: #0a0e12;
`;

const CardContainer = styled.section`
  display: flex;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const numCards = cardData?.length;

  return (
    <Main>
      <HeaderOne $width={width}>
        <HeaderTextOne $width={width}>
          See how video marketing has helped
        </HeaderTextOne>
      </HeaderOne>
      <HeaderTwo $width={width}>
        <HeaderTextTwo $width={width}>These businesses grow</HeaderTextTwo>
      </HeaderTwo>

      <CardContainer>
        <CardWrapper $numCards={numCards}>
          {cardData?.map((card, index) => (
            <Card data={card} width={width} cardsLength={cardData.length} />
          ))}
        </CardWrapper>
      </CardContainer>
      {/* <Carousel cards={cardData} /> */}
    </Main>
  );
};

export default App;
