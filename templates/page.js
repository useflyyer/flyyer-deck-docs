import React from "react"
import styled from "styled-components"

import background from "../static/bg.jpg";
import svg from "../static/watch.svg";

import "./reset.css";
import "./style.css";

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Background = styled(Layer)`
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:before, &:after {
    content: ' ';
    display: table;
  }
`;

const Effect2 = styled(Layer)`
  backdrop-filter: blur(3px);
  background-color: rgba(67, 70, 222, 0.55);
`;

const Content = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  padding-bottom: 50px;
`

export const Title = styled.h1`
  letter-spacing: -.1px;
  box-sizing: inherit;
  font-family: "IBM Plex Sans",sans-serif;

  color: white;
  text-align: center;
  /*  */
  margin: 0;
`;
const TitleText = styled.span`
color: #182334;
font-size: 3rem;
font-weight: 600;
`;
const Section = styled.span`
font-size: 6rem;
font-weight: 600;
`;

const BottomThing = styled(Layer)`
  top: unset;
  min-height: 100px;
  background-color: #182334;
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const Code = styled.code`
  color: white;
  font-size: 35px;
  font-family: "Andale Mono";
`;

const Read = styled.span`
  font-size: 1em;
  font-weight: normal;
  line-height: 2em;
`;
const Clock = styled.img.attrs({ src: svg })`
  filter: brightness(0) invert(1);
  height: 27px;
  width: 27px;
`

// Make sure to 'export default' a React component
export default function Hello({ variables }) {
  const {
    title = "FLAYYER DOCS",
    section = "Welcome",
    // section = "This template is generated dynamically",
    img = background,
    bottom = "$ npx create-flayyer-app --help",
    minutes,
  } = variables;

  function parseMinutes(n) {
    if (n === 1) return "1 minute"
    return `${n} minutes`
  }

  return (
    <div>
      <Background src={img} />
      <Effect2 />
      <Content>
        <Title>
          {title && (
            <TitleText>
              {title}
            </TitleText>
          )}
          <br />
          {section && <Section>{section}</Section>}
          <br />
          {minutes && Number(minutes) > 0 && (
            <Read>
              <Clock /> {parseMinutes(Number(minutes))} read
            </Read>
          )}
        </Title>

        {bottom && (
          <BottomThing>
            <Code>
              {bottom}
            </Code>
          </BottomThing>
        )}
      </Content>
    </div>
  );
}
