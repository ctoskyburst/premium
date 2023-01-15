import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled from "styled-components";
import { Hr } from "./ServiceHeroSection";

const DesignSection = ({ designServiceData }) => {
    return (
        <DesignSectionWrapper>
            <Blob />
            <Title>Design</Title>
            <DesignLists>
                {designServiceData.map(({ title, text }, index) => (
                    <DesignList key={index}>
                        <div className="image">
                            <img
                                loading="lazy"
                                src={`/images/homepage_design/${index + 1}.png`}
                                alt="image"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="content">
                            <div className="title">{title}</div>
                            <div className="text">{text}</div>
                        </div>
                    </DesignList>
                ))}
            </DesignLists>
            <QuoteWrapper>
                <Blob />
                “Every great design begins with an even better story.”.
            </QuoteWrapper>
            <Hr />
        </DesignSectionWrapper>
    );
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

const Title = styled.h2`
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

export const Blob = styled.div`
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

export default DesignSection;
