import { breakpoints, colors, fontSize } from "@/utils/styles";
import React from "react";
import styled from "styled-components";

const QuoteSection = ({ setContactModelOpen }) => {
    return (
        <QuoteWrapper>
            <div className="hash-tag">
                <span>#</span>WeUnderstandYourUser
            </div>
            <div className="title">Let’s craft brilliance together!</div>
            <div className="quotebtn">
                <button onClick={() => setContactModelOpen(true)}>
                    get a quote
                </button>
            </div>
        </QuoteWrapper>
    );
};

const QuoteWrapper = styled.div`
    width: 100%;
    min-height: 400px;
    background: linear-gradient(135deg, #3b2667 0%, #bc78ec 100%);
    border-top: 3px solid ${colors.gold};
    border-bottom: 3px solid ${colors.gold};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    .hash-tag {
        font-style: normal;
        font-weight: 600;
        font-size: ${fontSize.heading4};
        line-height: 42px;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.4);

        span {
            background: linear-gradient(
                93.3deg,
                #fccf31 39.55%,
                #d0a200 52.73%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);
        }

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.paragraph};
        }
    }
    .title {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading2};
        line-height: 63px;
        text-align: center;
        text-transform: capitalize;
        background: linear-gradient(93.3deg, #fccf31 39.55%, #d0a200 52.73%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
        }
    }

    .quotebtn button {
        padding: 24px 36px;
        background: ${colors.white};
        box-shadow: 0px 9px 50px rgba(0, 0, 0, 0.35);
        border-radius: 178px;
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading3};
        line-height: 39px;
        text-decoration: underline;
        color: #644092;
        border: none;
        text-transform: capitalize;
        outline: none;
        border: 2px solid ${colors.gold};

        @media screen and (max-width: ${breakpoints.sm}) {
            padding: 16px 48px;
        }
    }
`;

export default QuoteSection;
