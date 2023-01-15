import { B as BaseLayout, H as HeroTitle } from "./BaseLayout.04b39c66.mjs";
import { a as jsx, j as jsxs, s as spacing, b as breakpoints, f as fontSize, c as colors } from "../ssr.mjs";
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
const Thanks = () => {
  return /* @__PURE__ */ jsx(BaseLayout, {
    children: /* @__PURE__ */ jsx(HeroSection, {
      children: /* @__PURE__ */ jsx(Container, {
        fluid: true,
        children: /* @__PURE__ */ jsxs(Row, {
          children: [/* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsxs(ThanksLeft, {
              children: [/* @__PURE__ */ jsxs(HeroTitle, {
                children: ["Thank", /* @__PURE__ */ jsx("span", {
                  children: " You!"
                })]
              }), /* @__PURE__ */ jsx(Text, {
                children: "We will get back to you soon."
              }), /* @__PURE__ */ jsx(Button, {
                children: "See our process"
              })]
            })
          }), /* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsx(ThanksRight, {
              children: /* @__PURE__ */ jsx("img", {
                loading: "lazy",
                src: "/images/thanks.png",
                alt: "hero img",
                "aria-hidden": "true"
              })
            })
          })]
        })
      })
    })
  });
};
const HeroSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 500px;
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
const ThanksLeft = styled.div`
    width: 60%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
const ThanksRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        pointer-events: none;
        width: 500px;
    }
`;
const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    text-transform: capitalize;
    margin-top: ${spacing.lg};
    color: ${colors.gray200};
`;
const Button = styled.div`
    width: max-content;
    padding: 16px 24px;
    margin-top: ${spacing.lg};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    border-radius: 100px;
    line-height: 36px;
    text-transform: capitalize;
    border: 1px solid ${colors.gold};
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;
export {
  Thanks as default
};
