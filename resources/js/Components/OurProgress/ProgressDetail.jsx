import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled, { css } from "styled-components";

const ProgressDetail = ({ title, text, img, reverse }) => {
    return (
        <ProgressDetailWrapper reverse={reverse}>
            <Image reverse={reverse}>
                <img loading="lazy" src={img} alt="image" aria-hidden="true" />
            </Image>
            <Content>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Content>
        </ProgressDetailWrapper>
    );
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

    ${(props) =>
        props.reverse &&
        css`
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

const Image = styled.div`
    flex-basis: 40%;
    display: flex;

    ${(props) =>
        props.reverse &&
        css`
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
const Title = styled.h2`
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
const Text = styled.p`
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

export default ProgressDetail;
