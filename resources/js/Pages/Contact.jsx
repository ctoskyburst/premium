import { ContactForm } from "@/Components";
import { HeroTitle, Hr } from "@/Components/HeroSection";
import BaseLayout from "@/Layouts/BaseLayout";
import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Contact = ({ heroData, contactDetails }) => {
    return (
        <BaseLayout>
            <HeroSection>
                <Container fluid>
                    <Row className="mobile-reverse">
                        <Col lg="6" xl className="p-0">
                            <ContactLeft>
                                <HeroTitle>
                                    {heroData.title} <br />
                                    <span>{heroData.goldTitle}</span>
                                </HeroTitle>

                                <ContactForm />
                            </ContactLeft>
                        </Col>
                        <Col lg="6" xl className="p-0">
                            <ContactRight>
                                <img
                                    loading="lazy"
                                    src={heroData.image}
                                    alt="hero img"
                                />
                            </ContactRight>
                        </Col>
                    </Row>
                </Container>
                <Hr />
            </HeroSection>
            <ReachUsSection>
                <Title>you can reach us</Title>
                <Cards>
                    <Card>
                        <div className="image">
                            <img
                                loading="lazy"
                                src="/images/contact/1.png"
                                alt="image"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="content">
                            <div className="title">Office</div>
                            <div className="text">
                                {contactDetails.officeAddress}
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="image">
                            <img
                                loading="lazy"
                                src="/images/contact/2.png"
                                alt="image"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="content">
                            <div className="title">Email</div>
                            <div className="text">
                                Mail us at <br /> {contactDetails.email}
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className="image">
                            <img
                                loading="lazy"
                                src="/images/contact/3.png"
                                alt="image"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="content">
                            <div className="title">Call Us</div>
                            <div className="text">
                                Talk to us on <br /> {contactDetails.number}
                            </div>
                        </div>
                    </Card>
                </Cards>
            </ReachUsSection>
        </BaseLayout>
    );
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

export default Contact;
