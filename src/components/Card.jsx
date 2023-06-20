import React from "react";
import styled, { css } from "styled-components";

const CardArticle = styled.article`
  display: flex;
  flex-direction: column;

  gap: ${(props) => (props.$width < 768 ? "4rem" : "5rem")};
  background: #f1f5f9;
  width: ${(props) => (props.$width > 768 ? "49.5%" : "100%")};
  border-radius: ${(props) => (props.$width > 768 ? "3rem" : "2rem")};
  &:last-child {
    width: ${(props) => (props.$cardsLength % 2 !== 0 ? "100%" : "")};
    flex-direction: ${(props) =>
      props.$cardsLength % 2 !== 0 && props.$width > 768 ? "row-reverse" : ""};

    image {
      height: ${(props) =>
        props.$cardsLength % 2 !== 0 && props.$width > 768 ? "auto" : ""};
    }
    title {
      padding: ${(props) =>
        props.$cardsLength % 2 !== 0 && props.$width > 768
          ? "5rem 4rem 0"
          : ""};
    }
  }
  margin-bottom: 1rem;
`;

const CardImageWrapper = styled.image`
  height: ${(props) => (props.$width > 768 ? "25rem" : "12rem")};
  width: 100%;
  border-radius: ${(props) => (props.$width > 768 ? "3rem" : "2rem")};
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

const CardTitleContainer = styled.title`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.$width > 768 ? "0 4rem" : "0 2rem")};
  width: 85%;
`;

const TitleMain = styled.section``;

const Title = styled.div`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: #fafcfd;
  margin-bottom: 1.5rem;
  width: fit-content;
`;

const Paragraph = styled.div`
width:80%;
  text-align: left;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.$width > 768 ? "2.5rem" : "2rem")};
  line-height: 110%;
  letter-spacing: -0.04rem;
  color: #0a0e12;
  margin-bottom: ${(props) => (props.$width > 768 ? "4.5rem" : "4rem")};

  /* width: ${(props) => (props.$width > 768 ? "25.25rem" : "15.625rem")}; */
`;

const ButtonContainer = styled.button`
  width: 5rem;
  height: 2.813rem;
  background: #0a0e12;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;

  margin-bottom: ${(props) => (props.$width < 768 ? "4.5rem" : "5rem")};

  &:hover {
    background: #17d5ff;
    color: white;
  }
`;

const Card = ({ data, width, cardsLength }) => {
  console.log(width);
  return (
    <CardArticle device="mobile" $width={width} $cardsLength={cardsLength}>
      {/* <img className="card__image" src={data?.image} alt="img" /> */}
      <CardImageWrapper
        $width={width}
        style={{
          backgroundImage: `url("https://i.postimg.cc/RhYnBf5m/er-slider.jpg")`
        }}
      >
        {/* <video src={data.image} controls muted /> */}
      </CardImageWrapper>
      <CardTitleContainer $width={width}>
        {/* <div className="card__title">{data?.title}</div> */}
        {width > 768 ? (
          <TitleMain
            $cardsLength={cardsLength}
            style={{ display: "flex", gap: "0.5rem" }}
          >
            {["Pre-Production", "Use Case"].map((item) => {
              return <Title>{item}</Title>;
            })}
          </TitleMain>
        ) : (
          <Title>Pre-Production</Title>
        )}
        <Paragraph $width={width}>
          How Stellantis is powering limitless learning with video
        </Paragraph>
        <ButtonContainer $width={width}>
          <img src="" alt="" />
        </ButtonContainer>
      </CardTitleContainer>
    </CardArticle>
  );
};

export default Card;
