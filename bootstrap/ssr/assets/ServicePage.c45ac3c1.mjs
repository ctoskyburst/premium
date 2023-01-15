import { B as BaseLayout, S as ServiceHeroSection, D as DesignSection, d as DevelopmentSection, c as Testimonials } from "./BaseLayout.04b39c66.mjs";
import "react";
import { j as jsxs, a as jsx } from "../ssr.mjs";
import "@inertiajs/inertia-react";
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
const ServicePage = ({
  heroData,
  designServiceData,
  developmentService,
  testimonials
}) => {
  return /* @__PURE__ */ jsxs(BaseLayout, {
    children: [/* @__PURE__ */ jsx(ServiceHeroSection, {
      heroData
    }), /* @__PURE__ */ jsx(DesignSection, {
      designServiceData
    }), /* @__PURE__ */ jsx(DevelopmentSection, {
      developmentService
    }), /* @__PURE__ */ jsx(Testimonials, {
      data: testimonials,
      noBackground: true
    })]
  });
};
export {
  ServicePage as default
};
