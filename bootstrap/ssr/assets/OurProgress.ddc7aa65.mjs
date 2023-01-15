import { B as BaseLayout, P as ProgressHeroSection, b as ProgressDetail, c as Testimonials } from "./BaseLayout.04b39c66.mjs";
import { j as jsxs, a as jsx, b as breakpoints } from "../ssr.mjs";
import "react";
import styled from "styled-components";
import "@inertiajs/inertia-react";
import "react-icons/io5";
import "react-use";
import "react-bootstrap";
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
const OurProgess = ({
  heroData,
  progressDetail,
  testimonials
}) => {
  return /* @__PURE__ */ jsxs(BaseLayout, {
    children: [/* @__PURE__ */ jsx(ProgressHeroSection, {
      heroData
    }), /* @__PURE__ */ jsx(Blob, {}), progressDetail.map((item, index) => /* @__PURE__ */ jsx(ProgressDetail, {
      title: item.title,
      text: item.text,
      img: item.image,
      reverse: item.reverse
    }, index)), /* @__PURE__ */ jsx(Testimonials, {
      data: testimonials,
      noBackground: true
    })]
  });
};
const Blob = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 30%;
    top: 150%;
    opacity: 0.9;
    pointer-events: none;
    z-index: -1;

    background: linear-gradient(320.34deg, #8a6d06 37.91%, #ffc700 74.99%);
    filter: blur(395px);
    transform: rotate(-180deg);

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
export {
  Blob,
  OurProgess as default
};
