import { breakpoints, colors, fontSize } from "@/utils/styles";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { CloseBtn, Overlay } from "./ContactModel";

const ThanksModel = ({ setThanksModelOpen }) => {
    return (
        <>
            <Overlay onClick={() => setThanksModelOpen(false)} />
            <ThanksModelWrapper>
                <Wrapper>
                    <Title>
                        thank <span> you!</span>
                    </Title>
                    <Image>
                        <img
                            loading="lazy"
                            src="/images/thanks.png"
                            alt="thanks"
                            aria-hidden="true"
                        />
                    </Image>
                    <Link href={route("progress.index")}>
                        <ThanksBtn>see our progress</ThanksBtn>
                    </Link>
                </Wrapper>
                <CloseBtn
                    aria-label="close button"
                    onClick={() => setThanksModelOpen((v) => !v)}
                >
                    <img
                        loading="lazy"
                        src="/images/close.png"
                        alt="close"
                        aria-hidden="true"
                    />
                </CloseBtn>
            </ThanksModelWrapper>
        </>
    );
};

export const ThanksModelWrapper = styled.div`
    width: 40%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: ${colors.black};
    z-index: 999;
    padding: 60px 50px;
    border: 1px solid ${colors.gold};

    @media screen and (max-width: ${breakpoints.lg}) {
        width: 70%;
        padding: 40px 60px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 90%;
        padding: 20px 40px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-block: 24px;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
        gap: 16px;
    }
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading1};
    line-height: 78px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    color: ${colors.white};
    span {
        background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        font-size: ${fontSize.heading3};
    }
`;

const Image = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;

    img {
        max-width: 400px;

        @media screen and (max-width: ${breakpoints.md}) {
            max-width: 300px;
        }
    }
`;

const ThanksBtn = styled.button`
    background-color: transparent;
    border: 2px solid ${colors.gold};
    padding: 16px 24px;
    border-radius: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;
    text-transform: capitalize;
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media screen and (max-width: ${breakpoints.md}) {
        padding: 8px 16px;
        font-size: ${fontSize.heading5};
    }
`;
export default ThanksModel;
