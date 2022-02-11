import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  background-color: #e6cca9;
  max-width: 100%;
  height: 100vh;
  display: flex;
  padding-bottom: 100px;
  positions: relative;
  overflow: hidden;
  color: black;
  ${mobile({ overflow: "scroll" })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  ${"" /* max-height: 100%; */}
  display: flex;
  flex: 1;
  ${"" /* margin-top: 7%; */}
  justify-content: center;
  margin-left: 5%;
  ${mobile({
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 0,
    marginTop: "60px",
  })}
  ${tablet({ width: "50%", height: "65%" })};
`;

const Image = styled.img`
  max-height: 600px;
  ${mobile({ maxHeight: "400px" })}
  ${tablet({ height: "85%" })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "2px"
  })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "40px", textAlign: "justify", fontWeight: "900" })};
  ${tablet({ fontSize: "30px", fontWeight: "900" })};
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "28px",
    textAlign: "justify",
    letterSpacing: "0.5px",
    margin: "20px 0",
  })};
  ${tablet({ fontSize: "20px", marginTop: "25px", letterSpacing: "1px" })};
`;

const Button = styled.button`
  max-width: 150px;
  padding: 10px;
  font-size: 20px;
  background-color: #ae4ccf;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  ${mobile({ padding: "15px", fontSize: "19px", fontWeight: 900 })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex} className="Wrapper">
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id.toString()}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>ADOPT NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
