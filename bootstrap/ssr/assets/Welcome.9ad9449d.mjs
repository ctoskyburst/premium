import "react";
import { Head } from "@inertiajs/inertia-react";
import { B as BaseLayout, e as HeroSection, f as Services, c as Testimonials, R as ReasonSection } from "./BaseLayout.04b39c66.mjs";
import { j as jsxs, a as jsx } from "../ssr.mjs";
import "styled-components";
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
function Welcome({
  heroData,
  designServiceData,
  developmentService,
  testimonials,
  chooseUsData
}) {
  return /* @__PURE__ */ jsxs(BaseLayout, {
    children: [/* @__PURE__ */ jsx(Head, {
      title: "Welcome"
    }), /* @__PURE__ */ jsx(HeroSection, {
      heroData
    }), /* @__PURE__ */ jsx(Services, {
      designServiceData,
      developmentService
    }), /* @__PURE__ */ jsx(Testimonials, {
      data: testimonials,
      loop: true
    }), /* @__PURE__ */ jsx(ReasonSection, {
      chooseUsData
    })]
  });
}
export {
  Welcome as default
};
