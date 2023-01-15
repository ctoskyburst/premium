import { B as BaseLayout, H as HeroTitle, T as Timeline } from "./BaseLayout.04b39c66.mjs";
import { j as jsxs, a as jsx, s as spacing, b as breakpoints } from "../ssr.mjs";
import "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import "@inertiajs/inertia-react";
import "react-icons/io5";
import "react-use";
import "swiper/react";
import "react-icons/ai";
import "swiper";
import "react-icons/fa";
import "react-icons/io";
import "react-dom/server";
import "process";
import "http";
import "polished";
import "react/jsx-runtime";
const About = ({
  heroData,
  timelines
}) => {
  return /* @__PURE__ */ jsxs(BaseLayout, {
    children: [/* @__PURE__ */ jsx(HeroSection, {
      children: /* @__PURE__ */ jsx(Container, {
        fluid: true,
        children: /* @__PURE__ */ jsxs(Row, {
          children: [/* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsx(ServiceLeft, {
              children: /* @__PURE__ */ jsxs(HeroTitle, {
                children: [heroData.title1, /* @__PURE__ */ jsxs("span", {
                  children: [" ", heroData.goldText1]
                }), ". ", /* @__PURE__ */ jsx("br", {}), heroData.title2, /* @__PURE__ */ jsxs("span", {
                  children: [" ", heroData.goldText2]
                }), ".", /* @__PURE__ */ jsx("br", {}), " ", heroData.title3, /* @__PURE__ */ jsxs("span", {
                  children: [" ", heroData.goldText3]
                }), "."]
              })
            })
          }), /* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsx(ServiceRight, {
              children: /* @__PURE__ */ jsx("img", {
                loading: "lazy",
                src: heroData.image,
                alt: "hero img"
              })
            })
          })]
        })
      })
    }), /* @__PURE__ */ jsx(Timeline, {
      timelines
    })]
  });
};
const HeroSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 600px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
        min-height: 400px;
        margin-bottom: ${spacing.xl};
    }

    position: relative;
`;
const ServiceLeft = styled.div`
    width: 80%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
const ServiceRight = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    img {
        pointer-events: none;
        width: 700px;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
        }
    }
`;
export {
  About as default
};
