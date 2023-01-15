import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { HeroTitle } from "@/Components/HeroSection";
import { breakpoints, colors, spacing } from "@/utils/styles";

const ServiceHeroSection = ({ heroData }) => {
    return (
        <HeroSection>
            <Blob />
            <Container fluid>
                <Row>
                    <Col lg="6" xl className="p-0">
                        <ServiceLeft>
                            <HeroTitle>
                                {heroData.title} <br />
                                <span>{heroData.goldTitle}</span>
                            </HeroTitle>
                        </ServiceLeft>
                    </Col>
                    <Col lg="6" xl className="p-0">
                        <ServiceRight>
                            <img
                                loading="lazy"
                                src={heroData.image}
                                alt="hero img"
                            />
                        </ServiceRight>
                    </Col>
                </Row>
            </Container>
            <Hr />
        </HeroSection>
    );
};

export const Hr = styled.div`
    width: 100%;
    height: 2px;
    background: ${colors.gray700};
`;

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

export const Blob = styled.div`
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

export default ServiceHeroSection;
