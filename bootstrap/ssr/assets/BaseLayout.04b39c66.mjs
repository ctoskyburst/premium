import { s as spacing, b as breakpoints, f as fontSize, c as colors, j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { Link, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { useWindowSize } from "react-use";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from "react-icons/ai";
import { Pagination } from "swiper";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const links = [{
  name: "home",
  link: "home.index"
}, {
  name: "services",
  link: "services.index"
}, {
  name: "our progress",
  link: "progress.index"
}, {
  name: "about",
  link: "about.index"
}, {
  name: "contact",
  link: "contact.index"
}];
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    width
  } = useWindowSize();
  return /* @__PURE__ */ jsxs(NavContainer, {
    children: [/* @__PURE__ */ jsx(Logo, {
      children: /* @__PURE__ */ jsxs(Link, {
        href: route("home.index"),
        children: ["Skyburst\xA0", /* @__PURE__ */ jsx("span", {
          className: "animate",
          children: "Dev"
        })]
      })
    }), /* @__PURE__ */ jsx(IoMenu, {
      className: "hamberger-menu",
      size: fontSize.heading3,
      color: colors.white,
      onClick: () => setMobileMenuOpen(true)
    }), mobileMenuOpen && width <= 700 && /* @__PURE__ */ jsxs(MobileNavLinks, {
      children: [/* @__PURE__ */ jsx("div", {
        className: "blog"
      }), /* @__PURE__ */ jsx("div", {
        className: "icon",
        children: /* @__PURE__ */ jsx(IoCloseSharp, {
          className: "close-icon",
          size: fontSize.heading3,
          color: colors.white,
          onClick: () => setMobileMenuOpen(false)
        })
      }), links.map(({
        name,
        link
      }, index) => /* @__PURE__ */ jsx(MobileNavLink, {
        active: route().current(link),
        children: /* @__PURE__ */ jsx(Link, {
          onClick: () => setMobileMenuOpen(false),
          href: route(link),
          children: name
        })
      }, index))]
    }), /* @__PURE__ */ jsx(NavLinks, {
      children: links.map(({
        name,
        link
      }, index) => /* @__PURE__ */ jsx(NavLink, {
        active: route().current(link),
        children: /* @__PURE__ */ jsx(Link, {
          href: route(link),
          children: name
        })
      }, index))
    })]
  });
};
const NavContainer = styled.div`
    width: 100%;
    min-height: 80px;
    padding-inline: ${spacing.xxxxl};
    padding-block: ${spacing.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamberger-menu {
        display: none;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};

        .hamberger-menu {
            display: block;
        }
    }
`;
const Logo = styled.div`
    a {
        font-size: ${fontSize.heading3};
        font-weight: 600;

        &:hover {
            color: ${colors.white};
        }

        .animate {
            transition: all 600ms ease;
        }

        &:hover .animate {
            color: ${colors.gold};
        }
    }
`;
const NavLinks = styled.ul`
    flex-basis: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: ${spacing.md};

    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }
`;
const NavLink = styled.li`
    position: relative;

    a {
        font-size: ${fontSize.heading4};
        text-transform: uppercase;

        &:hover {
            color: ${colors.white};
        }
    }

    &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 3px;
        background: linear-gradient(175.9deg, ${colors.darkLinearGradient});
        bottom: -8px;
        left: 0;
        border-radius: 20px;
        transition: all 300ms ease;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }

    ${(props) => props.active && css`
            &::after {
                width: 100%;
            }
        `};
`;
const MobileNavLinks = styled.ul`
    position: fixed;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: ${colors.black};
    z-index: 999;

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 80%;
    }

    .blog {
        width: 100%;
        height: 300px;

        position: absolute;
        right: 50%;
        top: 50%;
        translate: 50% -50%;
        opacity: 0.9;
        pointer-events: none;
        z-index: -1;

        background: linear-gradient(320.34deg, #8a6d06 37.91%, #ffc700 74.99%);
        filter: blur(395px);
        transform: rotate(-180deg);
    }

    .icon {
        display: flex;
        justify-content: flex-end;
        padding: ${spacing.md};
    }
`;
const MobileNavLink = styled.li`
    padding: 36px;

    a {
        text-transform: capitalize;
        font-size: ${fontSize.heading5};
        font-weight: 500;

        ${(props) => props.active && css`
                font-weight: 600;
                background: linear-gradient(
                    95.08deg,
                    #8a6d06 15.96%,
                    #fccf31 93.04%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            `};
    }
`;
const HeroSection$2 = ({
  heroData
}) => {
  return /* @__PURE__ */ jsxs(HeroWrapper, {
    children: [/* @__PURE__ */ jsx(Blob$3, {}), /* @__PURE__ */ jsxs(Container, {
      fluid: true,
      children: [/* @__PURE__ */ jsxs(Row, {
        children: [/* @__PURE__ */ jsx(Col, {
          lg: "6",
          xl: true,
          className: "p-0",
          children: /* @__PURE__ */ jsxs(HeroLeft, {
            children: [/* @__PURE__ */ jsxs(HeroTitle, {
              children: [heroData.title, " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
                children: heroData.goldTitle
              })]
            }), /* @__PURE__ */ jsx(HeroText, {
              children: heroData.text
            }), /* @__PURE__ */ jsxs(CallToActions, {
              display: "none",
              children: [/* @__PURE__ */ jsx(ContactBtn, {
                children: "contact now"
              }), /* @__PURE__ */ jsx(LearnMoreBtn, {
                children: "see our progress"
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(Col, {
          lg: "6",
          xl: true,
          className: "p-0",
          children: /* @__PURE__ */ jsx(HeroRight, {
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: heroData.image,
              alt: "hero img"
            })
          })
        })]
      }), /* @__PURE__ */ jsxs(CallToActions, {
        desktopHide: true,
        children: [/* @__PURE__ */ jsx(ContactBtn, {
          children: "contact now"
        }), /* @__PURE__ */ jsx(LearnMoreBtn, {
          children: "see our progress"
        })]
      })]
    }), /* @__PURE__ */ jsx(CompanyLogo, {
      children: /* @__PURE__ */ jsx(Container, {
        fluid: true,
        children: /* @__PURE__ */ jsx(Row, {
          children: [1, 2, 3, 4].map((item, index) => /* @__PURE__ */ jsx(Col, {
            className: "img_change",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: `images/logo_${item}.png`,
              alt: `logo_${index}`,
              "aria-hidden": "true"
            })
          }, index))
        })
      })
    }), /* @__PURE__ */ jsx(Hr$2, {})]
  });
};
const Hr$2 = styled.div`
    width: 100%;
    height: 2px;
    background: ${colors.gray700};
    margin-block: 60px;
`;
const HeroWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 600px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
    }

    position: relative;
`;
const HeroLeft = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
`;
const HeroTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading1};
    text-transform: capitalize;
    color: ${colors.white};

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.heading4};
        line-height: 39px;
    }
    span {
        background: linear-gradient(90deg, ${colors.darkLinearGradient});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`;
const HeroText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.heading2};
    text-transform: lowercase;
    color: ${colors.whiteOpacity.Op_90};

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.paragraph};
        line-height: 24px;
    }
`;
const CallToActions = styled.div`
    display: flex;
    align-items: center;
    gap: 46px;
    margin-top: 16px;

    ${(props) => props.desktopHide && css`
            display: none;
        `}

    @media screen and (max-width: ${breakpoints.md}) {
        display: ${(props) => props.display};
        flex-direction: column;
        width: 100%;
        margin-top: 20px;

        @media screen and (max-width: ${breakpoints.md}) {
            padding-block: ${spacing.sm};
        }

        ${(props) => props.desktopHide && css`
                display: flex;
            `}
    }
`;
const ContactBtn = styled(Link)`
    padding: ${spacing.md} ${spacing.lg};
    background: linear-gradient(90deg, ${colors.lightLinearGradient});
    border-radius: 78px;
    color: ${colors.darkGold};
    font-style: normal;
    font-weight: 800;
    font-size: ${fontSize.heading4};
    line-height: 36px;
    text-transform: capitalize;

    &:hover {
        color: ${colors.darkGold};
        opacity: 0.9;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        text-align: center;
    }
`;
const LearnMoreBtn = styled(Link)`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;
    text-decoration-line: underline;
    color: ${colors.gray600};

    &:hover {
        color: ${colors.gray600};
        opacity: 0.9;
    }
`;
const HeroRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    img {
        width: 650px;
        pointer-events: none;
        @media screen and (max-width: ${breakpoints.md}) {
            width: 300px;
        }
    }
`;
const Blob$3 = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 20%;
    top: 15%;
    opacity: 0.8;
    pointer-events: none;

    background: linear-gradient(
        175.9deg,
        rgba(210, 164, 0, 0.82) 24.09%,
        rgba(138, 109, 6, 0.82) 114.09%
    );
    filter: blur(368.5px);
`;
const CompanyLogo = styled.div`
    width: 100%;
    margin-top: 70px;

    .img_change {
        mix-blend-mode: luminosity;
    }
`;
const HeroSection$3 = HeroSection$2;
const Services = ({
  designServiceData,
  developmentService
}) => {
  return /* @__PURE__ */ jsxs(ServiceWrapper, {
    children: [/* @__PURE__ */ jsxs(ServiceHeader, {
      children: [/* @__PURE__ */ jsx("h2", {
        children: "Services"
      }), /* @__PURE__ */ jsx("p", {
        children: "A studio focused on delivering challenge oriented solutions that make every interaction a delightful user experience and affirm the business goals."
      }), /* @__PURE__ */ jsx("img", {
        loading: "lazy",
        className: "service_header",
        src: "/images/service_header_img.png",
        alt: "services header",
        "aria-hidden": "true"
      })]
    }), /* @__PURE__ */ jsxs(DesignService, {
      children: [/* @__PURE__ */ jsx("div", {
        className: "blur_bg"
      }), /* @__PURE__ */ jsx("h2", {
        children: "design"
      }), /* @__PURE__ */ jsx("div", {
        className: "cards",
        children: designServiceData.map((item, index) => /* @__PURE__ */ jsxs("div", {
          className: "design_card",
          children: [/* @__PURE__ */ jsx("div", {
            className: "icon",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: `/images/homepage_design/${index + 1}.png`,
              alt: item
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "design_text",
            children: item
          })]
        }, index))
      }), /* @__PURE__ */ jsx("img", {
        loading: "lazy",
        src: "/images/planet.png",
        alt: "planet",
        "aria-hidden": "true",
        className: "planet-img"
      })]
    }), /* @__PURE__ */ jsx(Hr$1, {}), /* @__PURE__ */ jsxs(DesignService, {
      children: [/* @__PURE__ */ jsx("div", {
        className: "blur_bg"
      }), /* @__PURE__ */ jsx("h2", {
        children: "development"
      }), /* @__PURE__ */ jsx("div", {
        className: "cards",
        children: developmentService.map((item, index) => /* @__PURE__ */ jsxs("div", {
          className: "design_card",
          children: [/* @__PURE__ */ jsx("div", {
            className: "icon",
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: `/images/homepage_development/${index + 1}.png`,
              alt: item
            })
          }), /* @__PURE__ */ jsx("span", {
            className: "design_text",
            children: item
          })]
        }, index))
      })]
    })]
  });
};
const Hr$1 = styled.div`
    width: 100%;
    height: 2px;

    background: linear-gradient(
        90deg,
        rgba(252, 207, 49, 0.5) 11.79%,
        rgba(138, 109, 6, 0.2) 54.03%,
        rgba(252, 207, 49, 0.5) 90.42%
    );
`;
const ServiceWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 600px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
    }
`;
const ServiceHeader = styled.div`
    width: 100%;
    color: ${colors.white};
    position: relative;

    h2 {
        font-style: normal;
        font-size: ${fontSize.heading2};
        font-weight: 700;
        line-height: 63px;
        text-transform: capitalize;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
        }
    }

    p {
        width: 50%;
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSize.heading3};
        line-height: 48px;
        text-transform: lowercase;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.paragraph};
            line-height: 24px;
        }

        @media screen and (max-width: ${breakpoints.lg}) {
            width: 100%;
        }
    }

    .service_header {
        width: 650px;
        position: absolute;
        right: 0;
        top: 0;
    }
`;
const DesignService = styled.div`
    width: 100%;
    min-height: 400px;
    position: relative;

    .blur_bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            175.9deg,
            rgba(78, 61, 0, 0.57) 24.09%,
            rgba(138, 109, 6, 0.57) 114.09%
        );
        filter: blur(395px);
    }

    h2 {
        margin-block-start: 75px;
        margin-block-end: ${spacing.xxl};
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading2};
        line-height: 63px;
        text-transform: capitalize;

        background: linear-gradient(95.08deg, ${colors.darkLinearGradient});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
            margin-block-end: ${spacing.md};
        }
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: ${spacing.md};
        padding-bottom: ${spacing.md};

        @media screen and (max-width: ${breakpoints.sm}) {
            gap: ${spacing.sm};
        }
    }

    .design_text {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading4};
        line-height: 36px;
        text-transform: capitalize;
        background: linear-gradient(95.08deg, #8a6d06 15.96%, #fccf31 93.04%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading5};
        }
    }

    .design_card {
        display: flex;
        align-items: center;
        gap: ${spacing.sm};
        margin-block: ${spacing.lg};

        @media screen and (max-width: ${breakpoints.sm}) {
            margin-block: ${spacing.xm};
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;

            @media screen and (max-width: ${breakpoints.sm}) {
                width: 18px;
                height: 18px;
            }
        }
    }

    .planet-img {
        width: 400px;
        position: absolute;
        bottom: 0;
        right: 20px;
        mix-blend-mode: normal;
        user-select: none;
        pointer-events: none;
        z-index: -1;

        @media screen and (max-width: ${breakpoints.sm}) {
            display: none;
        }
    }
`;
const Services$1 = Services;
const swiper_min = "";
const pagination_min = "";
const Testimonials = ({
  data,
  loop,
  noBackground
}) => {
  const {
    width
  } = useWindowSize();
  const getSize = (width2) => {
    if (width2 < 737)
      return 1;
    if (width2 < 1133)
      return 2;
    return 3;
  };
  return /* @__PURE__ */ jsxs(TestimonialWrapper, {
    noBackground,
    children: [/* @__PURE__ */ jsx("div", {
      className: "overlay"
    }), /* @__PURE__ */ jsxs(Slider, {
      children: [/* @__PURE__ */ jsx("h2", {
        children: "What our clients saying"
      }), /* @__PURE__ */ jsx(SwiperWrapper, {
        children: /* @__PURE__ */ jsx(Swiper, {
          slidesPerView: getSize(width),
          spaceBetween: 48,
          centeredSlides: true,
          pagination: {
            clickable: true
          },
          grabCursor: true,
          loop,
          modules: [Pagination],
          className: "mySwiper",
          children: data.map(({
            image,
            name,
            designation,
            stars,
            text
          }, index) => /* @__PURE__ */ jsxs(SwiperSlide, {
            children: [/* @__PURE__ */ jsxs("div", {
              className: "card_header",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "card_header_content",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "avatar",
                  children: /* @__PURE__ */ jsx("img", {
                    loading: "lazy",
                    src: image,
                    alt: name
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "details",
                  children: [/* @__PURE__ */ jsx("div", {
                    className: "name",
                    children: name
                  }), /* @__PURE__ */ jsx("div", {
                    className: "designation",
                    children: designation
                  })]
                })]
              }), /* @__PURE__ */ jsx("div", {
                className: "stars",
                children: new Array(stars).fill(1).map((_, index2) => /* @__PURE__ */ jsx(AiTwotoneStar, {}, index2))
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "card_details",
              children: /* @__PURE__ */ jsx("p", {
                children: text
              })
            })]
          }, index))
        })
      })]
    })]
  });
};
const TestimonialWrapper = styled.div`
    width: 100%;
    min-height: 600px;
    margin-top: 50px;
    position: relative;
    overflow-x: hidden;

    ${(props) => !props.noBackground && css`
            background-image: url("/images/client_bg.png");
            background-size: cover;
            background-position: center;
        `}

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
    }

    .overlay {
        position: absolute;
        width: 100vw;
        top: 0;
        left: 0;
        height: 100%;
        pointer-events: none;

        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
`;
const Slider = styled.div`
    z-index: 10;
    padding-block: ${spacing.xxxxl};
    padding-inline: ${spacing.lg};
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading2};
        line-height: 63px;
        text-transform: capitalize;
        text-align: center;
        color: ${colors.white};

        @media screen and (max-width: ${breakpoints.md}) {
            font-size: ${fontSize.heading4};
        }
    }
`;
const SwiperWrapper = styled.div`
    margin-top: 100px;
    .swiper {
        width: 100%;
        min-height: 300px;

        @media screen and (max-width: ${breakpoints.md}) {
            min-height: 300px;
            height: auto;
        }
    }

    .swiper-pagination-bullet {
        background-color: ${colors.gray100};
    }

    .swiper-pagination-bullet-active {
        background-color: ${colors.gold};
    }

    .swiper-slide {
        min-height: 250px;
        background: ${colors.black};
        border-radius: 8px;
        color: ${colors.white};
        border: 1px solid;
        padding: 30px;
        border: 1px solid ${colors.gold};
        border-radius: 8px;

        @media screen and (max-width: ${breakpoints.md}) {
            min-height: 250px;
            height: auto;
        }

        .avatar {
            width: 56px;
            height: 56px;

            img {
                border-radius: 50%;
            }
        }

        .card_header_content {
            display: flex;
            align-items: flex-start;
            gap: ${spacing.md};

            @media screen and (max-width: ${breakpoints.md}) {
                align-items: center;
                text-align: center;
                flex-direction: column;
                gap: ${spacing.sm};
            }
        }

        .card_header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;

            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: column;
                align-items: center;
                gap: ${spacing.sm};

                .details {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacing.sm};
                }
            }

            .name {
                font-style: normal;
                font-weight: 700;
                font-size: ${fontSize.paragraph};
                line-height: 24px;
                letter-spacing: 0.5px;
                text-transform: capitalize;
                color: ${colors.white};

                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: ${fontSize.heading4};
                }
            }
            .designation {
                font-style: normal;
                font-weight: 500;
                font-size: ${fontSize.paragraph};
                line-height: 24px;
                letter-spacing: 0.5px;
                color: ${colors.gray200};
                text-transform: capitalize;
            }
            .stars {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${colors.gold};
            }
        }

        .card_details p {
            font-style: normal;
            font-weight: 400;
            font-size: ${fontSize.paragraph};
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #fafafa;

            @media screen and (max-width: ${breakpoints.sm}) {
                text-align: center;
            }
        }
    }
`;
const Testimonials$1 = Testimonials;
const ReasonSection = ({
  chooseUsData
}) => {
  return /* @__PURE__ */ jsxs(ReasonWrapper, {
    children: [/* @__PURE__ */ jsx("h2", {
      children: "why choose us?"
    }), /* @__PURE__ */ jsx(ReasonCards, {
      children: chooseUsData.map((item, index) => /* @__PURE__ */ jsxs(ReasonCard, {
        children: [/* @__PURE__ */ jsx("div", {
          className: "icon",
          children: /* @__PURE__ */ jsx("img", {
            loading: "lazy",
            src: `/images/choose_us/${index + 1}.png`,
            alt: "image",
            "aria-hidden": "true"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "card-content",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "title",
            children: ["we", /* @__PURE__ */ jsx("div", {
              className: "green",
              children: item.title
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "text",
            children: item.text
          })]
        })]
      }, index))
    })]
  });
};
const ReasonWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 400px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.sm}) {
        padding-inline: ${spacing.md};
        margin-bottom: ${spacing.xxxl};
    }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading1};
        line-height: 63px;
        text-transform: capitalize;
        color: ${colors.white};

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
        }
    }
`;
const ReasonCards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${spacing.xxxxl};
    gap: 16px;

    @media screen and (max-width: ${breakpoints.lg}) {
        margin-bottom: ${spacing.xxl};
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: 1fr;
        margin-top: ${spacing.xxl};
    }
`;
const ReasonCard = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    color: ${colors.white};
    .icon img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: ${breakpoints.sm}) {
            width: 80px;
            height: 80px;
        }
    }

    .title {
        text-transform: capitalize;
        display: flex;
        gap: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: ${fontSize.heading4};
        line-height: 42px;

        .green {
            color: #00bf69;
        }
    }

    .text {
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSize.paragraph};
        line-height: 22px;
        letter-spacing: 0.5px;
        color: #fafafa;
        text-align: justify;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.smText};
        }
    }
`;
const ReasonSection$1 = ReasonSection;
const QuoteSection = ({
  setContactModelOpen
}) => {
  return /* @__PURE__ */ jsxs(QuoteWrapper$1, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "hash-tag",
      children: [/* @__PURE__ */ jsx("span", {
        children: "#"
      }), "WeUnderstandYourUser"]
    }), /* @__PURE__ */ jsx("div", {
      className: "title",
      children: "Let\u2019s craft brilliance together!"
    }), /* @__PURE__ */ jsx("div", {
      className: "quotebtn",
      children: /* @__PURE__ */ jsx("button", {
        onClick: () => setContactModelOpen(true),
        children: "get a quote"
      })
    })]
  });
};
const QuoteWrapper$1 = styled.div`
    width: 100%;
    min-height: 400px;
    background: linear-gradient(135deg, #3b2667 0%, #bc78ec 100%);
    border-top: 3px solid ${colors.gold};
    border-bottom: 3px solid ${colors.gold};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    .hash-tag {
        font-style: normal;
        font-weight: 600;
        font-size: ${fontSize.heading4};
        line-height: 42px;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.4);

        span {
            background: linear-gradient(
                93.3deg,
                #fccf31 39.55%,
                #d0a200 52.73%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);
        }

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.paragraph};
        }
    }
    .title {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading2};
        line-height: 63px;
        text-align: center;
        text-transform: capitalize;
        background: linear-gradient(93.3deg, #fccf31 39.55%, #d0a200 52.73%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
        }
    }

    .quotebtn button {
        padding: 24px 36px;
        background: ${colors.white};
        box-shadow: 0px 9px 50px rgba(0, 0, 0, 0.35);
        border-radius: 178px;
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading3};
        line-height: 39px;
        text-decoration: underline;
        color: #644092;
        border: none;
        text-transform: capitalize;
        outline: none;
        border: 2px solid ${colors.gold};

        @media screen and (max-width: ${breakpoints.sm}) {
            padding: 16px 48px;
        }
    }
`;
const Footer = () => {
  return /* @__PURE__ */ jsxs(FooterWrapper, {
    children: [/* @__PURE__ */ jsx(Title$5, {
      children: "skyburst dev"
    }), /* @__PURE__ */ jsx(Links, {
      children: links.map(({
        name,
        link
      }, index) => /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(Link, {
          href: route(link),
          children: name
        })
      }, index))
    }), /* @__PURE__ */ jsxs(SocialLinks, {
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          children: /* @__PURE__ */ jsx(FaFacebookF, {
            size: 30
          })
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          children: /* @__PURE__ */ jsx(FaTwitter, {
            size: 30
          })
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          children: /* @__PURE__ */ jsx(FaInstagram, {
            size: 30
          })
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx("a", {
          href: "#",
          children: /* @__PURE__ */ jsx(IoMdMail, {
            size: 30
          })
        })
      })]
    }), /* @__PURE__ */ jsxs(Copyright, {
      children: ["\xA9-", new Date().getFullYear(), " ", /* @__PURE__ */ jsx("b", {
        children: "skyburst dev"
      }), " All rights reserved."]
    })]
  });
};
const FooterWrapper = styled.footer`
    width: 100%;
    margin: auto;
    min-height: 400px;
    padding-inline: ${spacing.xxxxl};
    padding-block: ${spacing.xl};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Title$5 = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    color: ${colors.white};
    text-transform: capitalize;

    @media screen and (max-width: ${breakpoints.sm}) {
        margin-bottom: ${spacing.lg};
    }
`;
const Links = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;

    @media screen and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        padding: 0;
        margin-bottom: ${spacing.lg};
        gap: 16px;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        flex-wrap: wrap;
    }

    a {
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSize.heading4};
        line-height: 36px;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.6);
    }
`;
const SocialLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;

    @media screen and (max-width: ${breakpoints.sm}) {
        padding: 0;
        margin-bottom: ${spacing.lg};
    }
`;
const Copyright = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.smText};
    line-height: 18px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
`;
const ServiceHeroSection = ({
  heroData
}) => {
  return /* @__PURE__ */ jsxs(HeroSection$1, {
    children: [/* @__PURE__ */ jsx(Blob$2, {}), /* @__PURE__ */ jsx(Container, {
      fluid: true,
      children: /* @__PURE__ */ jsxs(Row, {
        children: [/* @__PURE__ */ jsx(Col, {
          lg: "6",
          xl: true,
          className: "p-0",
          children: /* @__PURE__ */ jsx(ServiceLeft, {
            children: /* @__PURE__ */ jsxs(HeroTitle, {
              children: [heroData.title, " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
                children: heroData.goldTitle
              })]
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
    }), /* @__PURE__ */ jsx(Hr, {})]
  });
};
const Hr = styled.div`
    width: 100%;
    height: 2px;
    background: ${colors.gray700};
`;
const HeroSection$1 = styled.div`
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
    width: 60%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
const ServiceRight = styled.div`
    width: 100%;
    height: 100%;

    img {
        pointer-events: none;
    }
`;
const Blob$2 = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 10%;
    top: 15%;
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
const DesignSection = ({
  designServiceData
}) => {
  return /* @__PURE__ */ jsxs(DesignSectionWrapper, {
    children: [/* @__PURE__ */ jsx(Blob$1, {}), /* @__PURE__ */ jsx(Title$4, {
      children: "Design"
    }), /* @__PURE__ */ jsx(DesignLists, {
      children: designServiceData.map(({
        title,
        text
      }, index) => /* @__PURE__ */ jsxs(DesignList, {
        children: [/* @__PURE__ */ jsx("div", {
          className: "image",
          children: /* @__PURE__ */ jsx("img", {
            loading: "lazy",
            src: `/images/homepage_design/${index + 1}.png`,
            alt: "image",
            "aria-hidden": "true"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "content",
          children: [/* @__PURE__ */ jsx("div", {
            className: "title",
            children: title
          }), /* @__PURE__ */ jsx("div", {
            className: "text",
            children: text
          })]
        })]
      }, index))
    }), /* @__PURE__ */ jsxs(QuoteWrapper, {
      children: [/* @__PURE__ */ jsx(Blob$1, {}), "\u201CEvery great design begins with an even better story.\u201D."]
    }), /* @__PURE__ */ jsx(Hr, {})]
  });
};
const DesignSectionWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 800px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
    }

    position: relative;
`;
const Title$4 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    text-transform: capitalize;
    background: linear-gradient(95.08deg, ${colors.lightLinearGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;
const DesignLists = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    margin-top: ${spacing.xxl};

    @media screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: 1fr;
    }
`;
const DesignList = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: ${breakpoints.md}) {
        align-items: flex-start;
    }

    .image img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 64px;
            height: 64px;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title {
            font-style: normal;
            font-weight: 700;
            font-size: ${fontSize.heading4};
            line-height: 36px;
            text-transform: capitalize;
            background: linear-gradient(
                100.08deg,
                ${colors.lightLinearGradient}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;

            @media screen and (max-width: ${breakpoints.md}) {
                font-size: ${fontSize.paragraph};
            }
        }

        .text {
            font-style: normal;
            font-weight: 400;
            font-size: ${fontSize.paragraph};
            line-height: 22px;
            letter-spacing: 0.5px;
            color: ${colors.gray100};
            width: 60%;
            text-align: justify;

            @media screen and (max-width: ${breakpoints.md}) {
                width: 100%;
                font-size: ${fontSize.smText};
            }
        }
    }
`;
const QuoteWrapper = styled.div`
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    width: 80%;
    margin-inline: auto;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-block: ${spacing.xxxxl};

    font-style: italic;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;
    text-align: center;
    letter-spacing: 1.5px;
    color: ${colors.gray100};

    border: 1px solid ${colors.gold};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        font-size: ${fontSize.paragraph};
        padding: 16px;
    }
`;
const Blob$1 = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 50%;
    top: 50%;
    translate: 50% -50%;
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
const DevelopmentSection = ({
  developmentService
}) => {
  return /* @__PURE__ */ jsxs(DevelopmentSectionWrapper, {
    children: [/* @__PURE__ */ jsx(Blob, {}), /* @__PURE__ */ jsx(Title$3, {
      children: "development"
    }), /* @__PURE__ */ jsx(DevelopmentLists, {
      children: developmentService.map(({
        title,
        text
      }, index) => /* @__PURE__ */ jsxs(DevelopmentList, {
        children: [/* @__PURE__ */ jsx("div", {
          className: "image",
          children: /* @__PURE__ */ jsx("img", {
            loading: "lazy",
            src: `/images/homepage_development/${index + 1}.png`,
            alt: "image",
            "aria-hidden": "true"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "content",
          children: [/* @__PURE__ */ jsx("div", {
            className: "title",
            children: title
          }), /* @__PURE__ */ jsx("div", {
            className: "text",
            children: text
          })]
        })]
      }, index))
    })]
  });
};
const DevelopmentSectionWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 600px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: ${spacing.md};
    }

    position: relative;
`;
const Title$3 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    text-transform: capitalize;
    background: linear-gradient(95.08deg, ${colors.lightLinearGradient});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;
const DevelopmentLists = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    margin-top: ${spacing.xxl};

    @media screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: 1fr;
    }
`;
const DevelopmentList = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: ${breakpoints.md}) {
        align-items: flex-start;
    }

    .image img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 64px;
            height: 64px;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title {
            font-style: normal;
            font-weight: 700;
            font-size: ${fontSize.heading4};
            line-height: 36px;
            text-transform: capitalize;
            color: ${colors.white};

            @media screen and (max-width: ${breakpoints.md}) {
                font-size: ${fontSize.paragraph};
            }
        }

        .text {
            font-style: normal;
            font-weight: 400;
            font-size: ${fontSize.paragraph};
            line-height: 22px;
            letter-spacing: 0.5px;
            color: ${colors.gray100};
            width: 70%;
            text-align: justify;

            @media screen and (max-width: ${breakpoints.md}) {
                width: 100%;
                font-size: ${fontSize.smText};
            }
        }
    }
`;
const Blob = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 50%;
    top: 50%;
    translate: 50% -50%;
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
const ProgressHeroSection = ({
  heroData
}) => {
  return /* @__PURE__ */ jsx(HeroSection, {
    children: /* @__PURE__ */ jsx(Container, {
      fluid: true,
      children: /* @__PURE__ */ jsxs(Row, {
        children: [/* @__PURE__ */ jsx(Col, {
          lg: "6",
          xl: true,
          className: "p-0",
          children: /* @__PURE__ */ jsx(ProgressLeft, {
            children: /* @__PURE__ */ jsxs(HeroTitle, {
              children: [heroData.title, " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("span", {
                children: heroData.goldTitle
              })]
            })
          })
        }), /* @__PURE__ */ jsx(Col, {
          lg: "6",
          xl: true,
          className: "p-0",
          children: /* @__PURE__ */ jsx(ProgressRight, {
            children: /* @__PURE__ */ jsx("img", {
              loading: "lazy",
              src: heroData.image,
              alt: "hero img"
            })
          })
        })]
      })
    })
  });
};
const HeroSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 600px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        overflow: hidden;
        padding-inline: ${spacing.md};
        margin-top: 0;
        min-height: 400px;
        margin-bottom: ${spacing.xl};
    }

    position: relative;
`;
const ProgressLeft = styled.div`
    width: 60%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;
const ProgressRight = styled.div`
    width: 100%;
    height: 100%;
    img {
        width: 700px;
        top: -150px;
        right: 100px;
        position: absolute;
        pointer-events: none;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
            top: 10px;
            right: -100px;
        }
    }
`;
const ProgressDetail = ({
  title,
  text,
  img,
  reverse
}) => {
  return /* @__PURE__ */ jsxs(ProgressDetailWrapper, {
    reverse,
    children: [/* @__PURE__ */ jsx(Image$1, {
      reverse,
      children: /* @__PURE__ */ jsx("img", {
        loading: "lazy",
        src: img,
        alt: "image",
        "aria-hidden": "true"
      })
    }), /* @__PURE__ */ jsxs(Content, {
      children: [/* @__PURE__ */ jsx(Title$2, {
        children: title
      }), /* @__PURE__ */ jsx(Text$1, {
        children: text
      })]
    })]
  });
};
const ProgressDetailWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 400px;
    padding-inline: ${spacing.xxxxl};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${spacing.xxxl};

    ${(props) => props.reverse && css`
            flex-direction: row-reverse;
        `}

    @media screen and (max-width: ${breakpoints.lg}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
        min-height: 400px;
        margin-bottom: ${spacing.xl};

        flex-direction: column;
        justify-content: center;
        gap: ${spacing.lg};
    }

    position: relative;
`;
const Image$1 = styled.div`
    flex-basis: 40%;
    display: flex;

    ${(props) => props.reverse && css`
            justify-content: flex-end;
        `}

    img {
        width: 450px;
        border: 2px solid ${colors.gold};
        border-radius: 8px;

        @media screen and (max-width: ${breakpoints.md}) {
            width: 100%;
        }
    }
`;
const Content = styled.div`
    flex-basis: 60%;
`;
const Title$2 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    text-transform: capitalize;
    background: linear-gradient(
        90deg,
        #fccf31 41.85%,
        rgba(138, 109, 6, 0.72) 93.39%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.heading4};
        line-height: 39px;
    }
`;
const Text$1 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.heading3};
    line-height: 48px;
    text-transform: capitalize;
    color: ${colors.white};

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.smText};
        line-height: 22px;
    }
`;
const Timeline = ({
  timelines
}) => {
  return /* @__PURE__ */ jsxs(TimelineWrapper, {
    children: [/* @__PURE__ */ jsx(Centerline, {}), /* @__PURE__ */ jsx(TimelineM, {
      children: /* @__PURE__ */ jsx("ul", {
        children: timelines.map((data, index) => /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsxs(TimelineContent, {
            children: [/* @__PURE__ */ jsx(Title$1, {
              children: data.title
            }), /* @__PURE__ */ jsx(Text, {
              children: data.text
            })]
          })
        }, index))
      })
    })]
  });
};
const TimelineWrapper = styled.div`
    min-height: 1000px;
    width: 100%;
    display: grid;
    place-items: center;
    position: relative;
    margin-block: ${spacing.lg};

    @media screen and (max-width: ${breakpoints.sm}) {
        min-height: 800px;
    }
`;
const TimelineM = styled.div`
    max-width: 1100px;
    margin: 50px auto;
    padding: ${spacing.md};
    ul {
        padding: 0;
    }
    li {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 100px;

        @media screen and (max-width: ${breakpoints.md}) {
            margin-left: 50px;
            margin-bottom: 50px;
        }

        @media screen and (max-width: ${breakpoints.sm}) {
            margin-left: 0;
            margin-bottom: 24px;
        }

        &:nth-child(even) {
            justify-content: flex-end;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
const Centerline = styled.div`
    position: absolute;
    height: 100%;
    width: 14px;
    border-radius: 50px;
    background-color: rgba(255, 217, 0, 0.2);
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: ${breakpoints.md}) {
        left: 30px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        display: none;
    }
`;
const TimelineContent = styled.div`
    background-color: transparent;
    border: 1px solid gold;
    padding: 8px 24px;
    width: calc(50% - 60px);
    position: relative;
    border-radius: 4px;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }

    &::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        top: 40%;
        transform: translateY(-50%, -50%);
        background: linear-gradient(180deg, #ffc700 0%, #8a6d06 100%);
        border-radius: 4px;
        rotate: 45deg;

        @media screen and (max-width: ${breakpoints.sm}) {
            display: none;
        }
    }

    ${TimelineM} li &:before {
        right: -80px;

        @media screen and (max-width: ${breakpoints.md}) {
            right: auto;
            left: -60px;
        }
    }
    ${TimelineM} li:nth-child(even) &:before {
        left: -80px;

        @media screen and (max-width: ${breakpoints.md}) {
            left: -60px;
        }
    }
`;
const Title$1 = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading5};
    line-height: 33px;
    text-transform: capitalize;
    background: linear-gradient(180deg, #ffc700 0%, #8a6d06 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.heading5};
    line-height: 33px;
    text-transform: capitalize;
    color: ${colors.white};
    margin-bottom: 0;

    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: ${fontSize.paragraph};
        line-height: normal;
    }
`;
const ContactForm = () => {
  const {
    data,
    setData,
    post,
    processing,
    errors,
    reset
  } = useForm({
    name: "",
    email: "",
    number: ""
  });
  function submit(e) {
    e.preventDefault();
    post(route("contact.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
        Toast.fire({
          icon: "success",
          title: "Send successfully"
        });
      }
    });
  }
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  return /* @__PURE__ */ jsxs(Form, {
    onSubmit: submit,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "group",
      children: [/* @__PURE__ */ jsx("label", {
        htmlFor: "name",
        children: "Hi! I am"
      }), /* @__PURE__ */ jsx("input", {
        type: "text",
        placeholder: "eg.Andy",
        id: "name",
        name: "name",
        value: data.name,
        onChange
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "group",
      children: [/* @__PURE__ */ jsx("label", {
        htmlFor: "email",
        children: "Reach me at"
      }), /* @__PURE__ */ jsx("input", {
        type: "email",
        placeholder: "eg.Andy@gmail.com",
        id: "email",
        name: "email",
        value: data.email,
        onChange
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "group",
      children: [/* @__PURE__ */ jsx("label", {
        htmlFor: "number",
        children: "Mobile +91"
      }), /* @__PURE__ */ jsx("input", {
        type: "number",
        placeholder: "7721866770",
        id: "number",
        name: "number",
        value: data.number,
        onChange
      })]
    }), /* @__PURE__ */ jsx(Button, {
      type: "submit",
      disabled: processing,
      children: "send"
    })]
  });
};
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-top: 24px;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
    .group {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    input {
        font: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: ${fontSize.heading3};
        line-height: 45px;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${colors.gray100};
        outline: none;
        color: ${colors.white};

        &::placeholder {
            opacity: 0.4;
        }

        @media screen and (max-width: ${breakpoints.md}) {
            flex-basis: 100%;
            font-size: ${fontSize.heading5};
        }
    }

    label {
        flex: 1;
        font-style: normal;
        font-weight: 500;
        font-size: ${fontSize.heading3};
        line-height: 45px;
        display: flex;
        align-items: center;
        color: ${colors.white};
        line-break: loose;

        @media screen and (max-width: ${breakpoints.md}) {
            flex-basis: 100%;
            line-height: normal;
            font-size: ${fontSize.heading5};
        }
    }
`;
const Button = styled.button`
    margin-top: 36px;
    padding: 8px 48px;
    border-radius: 100px;
    text-transform: capitalize;
    background-color: transparent;
    border: 1px solid ${colors.gold};
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;

    @media screen and (max-width: ${breakpoints.md}) {
        margin-top: 24px;
        width: 100%;
    }
`;
const ContactModel = ({
  setContactModelOpen
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Overlay, {
      onClick: () => setContactModelOpen(false)
    }), /* @__PURE__ */ jsxs(ContactModelWrapper, {
      children: [/* @__PURE__ */ jsx(ContactForm, {}), /* @__PURE__ */ jsx(CloseBtn, {
        "aria-label": "close button",
        onClick: () => setContactModelOpen((v) => !v),
        children: /* @__PURE__ */ jsx("img", {
          src: "/images/close.png",
          alt: "close",
          "aria-hidden": "true",
          loading: "lazy"
        })
      })]
    })]
  });
};
const ContactModelWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: ${colors.black};
    display: block;
    z-index: 999;
    padding: 60px 50px;
    border: 1px solid ${colors.gold};

    @media screen and (max-width: ${breakpoints.md}) {
        padding: 40px 60px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        padding: 20px 40px;
    }
`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;
const CloseBtn = styled.button`
    position: fixed;
    top: 10%;
    right: 3%;
    translate: -50% -50%;
    background-color: transparent;
    border: none;
    img {
        width: 32px;
        height: 32px;
        user-select: none;
    }
`;
const ThanksModel = ({
  setThanksModelOpen
}) => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Overlay, {
      onClick: () => setThanksModelOpen(false)
    }), /* @__PURE__ */ jsxs(ThanksModelWrapper, {
      children: [/* @__PURE__ */ jsxs(Wrapper, {
        children: [/* @__PURE__ */ jsxs(Title, {
          children: ["thank ", /* @__PURE__ */ jsx("span", {
            children: " you!"
          })]
        }), /* @__PURE__ */ jsx(Image, {
          children: /* @__PURE__ */ jsx("img", {
            loading: "lazy",
            src: "/images/thanks.png",
            alt: "thanks",
            "aria-hidden": "true"
          })
        }), /* @__PURE__ */ jsx(Link, {
          href: route("progress.index"),
          children: /* @__PURE__ */ jsx(ThanksBtn, {
            children: "see our progress"
          })
        })]
      }), /* @__PURE__ */ jsx(CloseBtn, {
        "aria-label": "close button",
        onClick: () => setThanksModelOpen((v) => !v),
        children: /* @__PURE__ */ jsx("img", {
          loading: "lazy",
          src: "/images/close.png",
          alt: "close",
          "aria-hidden": "true"
        })
      })]
    })]
  });
};
const ThanksModelWrapper = styled.div`
    width: 40%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: ${colors.black};
    z-index: 999;
    padding: 60px 50px;
    border: 1px solid ${colors.gold};

    @media screen and (max-width: ${breakpoints.lg}) {
        width: 70%;
        padding: 40px 60px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 90%;
        padding: 20px 40px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-block: 24px;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        gap: 16px;
    }
`;
const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading1};
    line-height: 78px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${colors.white};
    span {
        background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.heading3};
    }
`;
const Image = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    img {
        max-width: 400px;

        @media screen and (max-width: ${breakpoints.md}) {
            max-width: 300px;
        }
    }
`;
const ThanksBtn = styled.button`
    background-color: transparent;
    border: 2px solid ${colors.gold};
    padding: 16px 24px;
    border-radius: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;
    text-transform: capitalize;
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media screen and (max-width: ${breakpoints.md}) {
        padding: 8px 16px;
        font-size: ${fontSize.heading5};
    }
`;
const BaseLayout = ({
  children
}) => {
  const [contactModelOpen, setContactModelOpen] = useState(false);
  const [thanksModelOpen, setThanksModelOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), contactModelOpen && /* @__PURE__ */ jsx(ContactModel, {
      setContactModelOpen
    }), thanksModelOpen && /* @__PURE__ */ jsx(ThanksModel, {
      setThanksModelOpen
    }), children, /* @__PURE__ */ jsx(QuoteSection, {
      setContactModelOpen
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const BaseLayout$1 = BaseLayout;
export {
  BaseLayout$1 as B,
  ContactForm as C,
  DesignSection as D,
  HeroTitle as H,
  ProgressHeroSection as P,
  ReasonSection$1 as R,
  ServiceHeroSection as S,
  Timeline as T,
  Hr$2 as a,
  ProgressDetail as b,
  Testimonials$1 as c,
  DevelopmentSection as d,
  HeroSection$3 as e,
  Services$1 as f
};
