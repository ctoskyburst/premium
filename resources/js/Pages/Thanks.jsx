import { HeroTitle } from "@/Components/HeroSection";
import BaseLayout from "@/Layouts/BaseLayout";
import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Thanks = () => {
    return (
        <BaseLayout>
            <HeroSection>
                <Container fluid>
                    <Row>
                        <Col lg="6" xl className="p-0">
                            <ThanksLeft>
                                <HeroTitle>
                                    Thank
                                    <span> You!</span>
                                </HeroTitle>
                                <Text>We will get back to you soon.</Text>
                                <Button>See our process</Button>
                            </ThanksLeft>
                        </Col>
                        <Col lg="6" xl className="p-0">
                            <ThanksRight>
                                <img
                                    loading="lazy"
                                    src="/images/thanks.png"
                                    alt="hero img"
                                    aria-hidden="true"
                                />
                            </ThanksRight>
                        </Col>
                    </Row>
                </Container>
            </HeroSection>
        </BaseLayout>
    );
};

const HeroSection = styled.div`
    width: 100%;
    margin: auto;
    min-height: 500px;
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

const ThanksLeft = styled.div`
    width: 60%;
    padding-top: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;

const ThanksRight = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        pointer-events: none;
        width: 500px;
    }
`;

const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    text-transform: capitalize;
    margin-top: ${spacing.lg};
    color: ${colors.gray200};
`;
const Button = styled.div`
    width: max-content;
    padding: 16px 24px;
    margin-top: ${spacing.lg};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    border-radius: 100px;
    line-height: 36px;
    text-transform: capitalize;
    border: 1px solid ${colors.gold};
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
`;

export default Thanks;
