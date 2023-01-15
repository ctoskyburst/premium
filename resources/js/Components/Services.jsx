import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled from "styled-components";

const Services = ({ designServiceData, developmentService }) => {
    return (
        <ServiceWrapper>
            <ServiceHeader>
                <h2>Services</h2>
                <p>
                    As a studio, we are dedicated to creating innovative
                    solutions that enhance the user experience and align with
                    the business objectives in every interaction.
                </p>
                {/* <p>
                    A studio focused on delivering challenge oriented solutions
                    that make every interaction a delightful user experience and
                    affirm the business goals.
                </p> */}
                <img
                    loading="lazy"
                    className="service_header"
                    src="/images/service_header_img.png"
                    alt="services header"
                    aria-hidden="true"
                />
            </ServiceHeader>
            <DesignService>
                <div className="blur_bg"></div>
                <h2>design</h2>
                <div className="cards">
                    {designServiceData.map((item, index) => (
                        <div className="design_card" key={index}>
                            <div className="icon">
                                <img
                                    loading="lazy"
                                    src={`/images/homepage_design/${
                                        index + 1
                                    }.png`}
                                    alt={item}
                                />
                            </div>
                            <span className="design_text">{item}</span>
                        </div>
                    ))}
                </div>
                <img
                    loading="lazy"
                    src="/images/planet.png"
                    alt="planet"
                    aria-hidden="true"
                    className="planet-img"
                />
            </DesignService>
            <Hr />
            <DesignService>
                <div className="blur_bg"></div>
                <h2>development</h2>
                <div className="cards">
                    {developmentService.map((item, index) => (
                        <div className="design_card" key={index}>
                            <div className="icon">
                                <img
                                    loading="lazy"
                                    src={`/images/homepage_development/${
                                        index + 1
                                    }.png`}
                                    alt={item}
                                />
                            </div>
                            <span className="design_text">{item}</span>
                        </div>
                    ))}
                </div>
            </DesignService>
        </ServiceWrapper>
    );
};

const Hr = styled.div`
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

export default Services;
