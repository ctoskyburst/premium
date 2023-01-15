import { Timeline } from "@/Components";
import { HeroTitle } from "@/Components/HeroSection";
import BaseLayout from "@/Layouts/BaseLayout";
import { breakpoints, spacing } from "@/utils/styles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const About = ({ heroData, timelines }) => {
    return (
        <BaseLayout>
            <HeroSection>
                <Container fluid>
                    <Row>
                        <Col lg="6" xl className="p-0">
                            <ServiceLeft>
                                <HeroTitle>
                                    {heroData.title1}
                                    <span> {heroData.goldText1}</span>. <br />
                                    {heroData.title2}
                                    <span> {heroData.goldText2}</span>.
                                    <br /> {heroData.title3}
                                    <span> {heroData.goldText3}</span>.
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
            </HeroSection>
            <Timeline timelines={timelines} />
        </BaseLayout>
    );
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

export default About;
