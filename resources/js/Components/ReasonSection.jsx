import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled from "styled-components";

const ReasonSection = ({ chooseUsData }) => {
    return (
        <ReasonWrapper>
            <h2>why choose us?</h2>

            <ReasonCards>
                {chooseUsData.map((item, index) => (
                    <ReasonCard key={index}>
                        <div className="icon">
                            <img
                                loading="lazy"
                                src={`/images/choose_us/${index + 1}.png`}
                                alt="image"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="card-content">
                            <div className="title">
                                we
                                <div className="green">{item.title}</div>
                            </div>
                            <div className="text">{item.text}</div>
                        </div>
                    </ReasonCard>
                ))}
            </ReasonCards>
        </ReasonWrapper>
    );
};

const ReasonWrapper = styled.div`
    width: 100%;
    margin: auto;
    min-height: 400px;
    margin-top: 50px;
    padding-inline: ${spacing.xxxxl};

    @media screen and (max-width: ${breakpoints.sm}) {
        padding-inline: ${spacing.md};
        margin-bottom: ${spacing.xxxl};
    }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading1};
        line-height: 63px;
        text-transform: capitalize;
        color: ${colors.white};

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.heading4};
        }
    }
`;

const ReasonCards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: ${spacing.xxxxl};
    gap: 16px;

    @media screen and (max-width: ${breakpoints.lg}) {
        margin-bottom: ${spacing.xxl};
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: 1fr;
        margin-top: ${spacing.xxl};
    }
`;
const ReasonCard = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    color: ${colors.white};
    .icon img {
        width: 100px;
        height: 100px;

        @media screen and (max-width: ${breakpoints.sm}) {
            width: 80px;
            height: 80px;
        }
    }

    .title {
        text-transform: capitalize;
        display: flex;
        gap: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: ${fontSize.heading4};
        line-height: 42px;

        .green {
            color: #00bf69;
        }
    }

    .text {
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSize.paragraph};
        line-height: 22px;
        letter-spacing: 0.5px;
        color: #fafafa;
        text-align: justify;

        @media screen and (max-width: ${breakpoints.sm}) {
            font-size: ${fontSize.smText};
        }
    }
`;

export default ReasonSection;
