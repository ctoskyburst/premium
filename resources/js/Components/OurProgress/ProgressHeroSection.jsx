import { breakpoints, spacing } from "@/utils/styles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { HeroTitle } from "../HeroSection";

const ProgressHeroSection = ({ heroData }) => {
    return (
        <HeroSection>
            <Container fluid>
                <Row>
                    <Col lg="6" xl className="p-0">
                        <ProgressLeft>
                            <HeroTitle>
                                {heroData.title} <br />
                                <span>{heroData.goldTitle}</span>
                            </HeroTitle>
                        </ProgressLeft>
                    </Col>
                    <Col lg="6" xl className="p-0">
                        <ProgressRight>
                            <img
                                loading="lazy"
                                src={heroData.image}
                                alt="hero img"
                            />
                        </ProgressRight>
                    </Col>
                </Row>
            </Container>
        </HeroSection>
    );
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

export default ProgressHeroSection;
