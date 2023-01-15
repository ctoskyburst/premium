import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled from "styled-components";

const Timeline = ({ timelines }) => {
    return (
        <TimelineWrapper>
            <Centerline />
            <TimelineM>
                <ul>
                    {timelines.map((data, index) => (
                        <li key={index}>
                            <TimelineContent>
                                <Title>{data.title}</Title>
                                <Text>{data.text}</Text>
                            </TimelineContent>
                        </li>
                    ))}
                </ul>
            </TimelineM>
        </TimelineWrapper>
    );
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
const Title = styled.h3`
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

export default Timeline;
