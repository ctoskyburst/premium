import { B as BaseLayout, H as HeroTitle, C as ContactForm, a as Hr } from "./BaseLayout.04b39c66.mjs";
import { j as jsxs, a as jsx, s as spacing, b as breakpoints, f as fontSize, c as colors } from "../ssr.mjs";
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
const Contact = ({
  heroData,
  contactDetails
}) => {
  return /* @__PURE__ */ jsxs(BaseLayout, {
    children: [/* @__PURE__ */ jsxs(HeroSection, {
      children: [/* @__PURE__ */ jsx(Container, {
        fluid: true,
        children: /* @__PURE__ */ jsxs(Row, {
          className: "mobile-reverse",
          children: [/* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsxs(ContactLeft, {
              children: [/* @__PURE__ */ jsxs(HeroTitle, {
                children: [heroData.title, " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
                  children: heroData.goldTitle
                })]
              }), /* @__PURE__ */ jsx(ContactForm, {})]
            })
          }), /* @__PURE__ */ jsx(Col, {
            lg: "6",
            xl: true,
            className: "p-0",
            children: /* @__PURE__ */ jsx(ContactRight, {
              children: /* @__PURE__ */ jsx("img", {
                loading: "lazy",
                src: heroData.image,
                alt: "hero img"
              })
            })
          })]
        })
      }), /* @__PURE__ */ jsx(Hr, {})]
    }), /* @__PURE__ */ jsxs(ReachUsSection, {
      children: [/* @__PURE__ */ jsx(Title, {
        children: "you can reach us"
      }), /* @__PURE__ */ jsxs(Cards, {
        children: [/* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("div", {
            className: "image",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: "/images/contact/1.png",
              alt: "image",
              "aria-hidden": "true"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "content",
            children: [/* @__PURE__ */ jsx("div", {
              className: "title",
              children: "Office"
            }), /* @__PURE__ */ jsx("div", {
              className: "text",
              children: contactDetails.officeAddress
            })]
          })]
        }), /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("div", {
            className: "image",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: "/images/contact/2.png",
              alt: "image",
              "aria-hidden": "true"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "content",
            children: [/* @__PURE__ */ jsx("div", {
              className: "title",
              children: "Email"
            }), /* @__PURE__ */ jsxs("div", {
              className: "text",
              children: ["Mail us at ", /* @__PURE__ */ jsx("br", {}), " ", contactDetails.email]
            })]
          })]
        }), /* @__PURE__ */ jsxs(Card, {
          children: [/* @__PURE__ */ jsx("div", {
            className: "image",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: "/images/contact/3.png",
              alt: "image",
              "aria-hidden": "true"
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "content",
            children: [/* @__PURE__ */ jsx("div", {
              className: "title",
              children: "Call Us"
            }), /* @__PURE__ */ jsxs("div", {
              className: "text",
              children: ["Talk to us on ", /* @__PURE__ */ jsx("br", {}), " ", contactDetails.number]
            })]
          })]
        })]
      })]
    })]
  });
};
const HeroSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 400px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};
    position: relative;

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
        min-height: 400px;
        margin-bottom: ${spacing.xl};
    }
`;
const ContactLeft = styled.div`
    width: 80%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
const ContactRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }

    img {
        width: 500px;
        height: 500px;

        @media screen and (max-width: ${breakpoints.xl}) {
            width: 300px;
            height: 300px;
        }
    }
`;
const ReachUsSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 400px;
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
const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 36px;
    text-transform: capitalize;
    color: ${colors.white};
    margin-block: ${spacing.xxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.heading3};
    }
`;
const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${spacing.md};

    @media screen and (max-width: ${breakpoints.lg}) {
        margin-block: 24px;
        grid-template-columns: 1fr;
        gap: ${spacing.lg};
    }
`;
const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: ${breakpoints.md}) {
        align-items: flex-start;
    }
    img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 64px;
            height: 64px;
        }
    }

    .content {
        width: 100%;
        .title {
            font-style: normal;
            font-weight: 600;
            font-size: ${fontSize.heading4};
            line-height: 42px;
            text-transform: capitalize;
            color: ${colors.white};
        }

        .text {
            width: 80%;
            font-style: normal;
            font-weight: 400;
            font-size: ${fontSize.paragraph};
            line-height: 22px;
            letter-spacing: 0.5px;
            color: ${colors.gray100};
        }
    }
`;
export {
  Contact as default
};
