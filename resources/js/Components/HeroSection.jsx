import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { css } from "styled-components";

const HeroSection = ({ heroData }) => {
    return (
        <HeroWrapper>
            <Blob />
            <Container fluid>
                <Row>
                    <Col lg="6" xl className="p-0">
                        <HeroLeft>
                            <HeroTitle>
                                {heroData.title} <br />
                                <span>{heroData.goldTitle}</span>
                            </HeroTitle>
                            <HeroText>{heroData.text}</HeroText>
                            <CallToActions display="none">
                                <ContactBtn>contact now</ContactBtn>
                                <LearnMoreBtn>see our progress</LearnMoreBtn>
                            </CallToActions>
                        </HeroLeft>
                    </Col>
                    <Col lg="6" xl className="p-0">
                        <HeroRight>
                            <img
                                loading="lazy"
                                src={heroData.image}
                                alt="hero img"
                            />
                        </HeroRight>
                    </Col>
                </Row>
                <CallToActions desktopHide>
                    <ContactBtn>contact now</ContactBtn>
                    <LearnMoreBtn>see our progress</LearnMoreBtn>
                </CallToActions>
            </Container>
            <CompanyLogo>
                <Container fluid>
                    <Row>
                        {[1, 2, 3, 4].map((item, index) => (
                            <Col key={index} className="img_change">
                                <img
                                    loading="lazy"
                                    src={`images/logo_${item}.png`}
                                    alt={`logo_${index}`}
                                    aria-hidden="true"
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </CompanyLogo>
            <Hr></Hr>
        </HeroWrapper>
    );
};

export const Hr = styled.div`
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

export const HeroTitle = styled.div`
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
    font-size: ${fontSize.heading3};
    text-transform: capitalize;
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

    ${(props) =>
        props.desktopHide &&
        css`
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

        ${(props) =>
            props.desktopHide &&
            css`
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
const Blob = styled.div`
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

export default HeroSection;
