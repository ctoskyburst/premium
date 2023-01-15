import { breakpoints, colors } from "@/utils/styles";
import React from "react";
import styled from "styled-components";
import { ContactForm } from ".";

const ContactModel = ({ setContactModelOpen }) => {
    return (
        <>
            <Overlay onClick={() => setContactModelOpen(false)} />
            <ContactModelWrapper>
                <ContactForm />
                <CloseBtn
                    aria-label="close button"
                    onClick={() => setContactModelOpen((v) => !v)}
                >
                    <img
                        src="/images/close.png"
                        alt="close"
                        aria-hidden="true"
                        loading="lazy"
                    />
                </CloseBtn>
            </ContactModelWrapper>
        </>
    );
};

export const ContactModelWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: ${colors.black};
    display: block;
    z-index: 999;
    padding: 60px 50px;
    border: 1px solid ${colors.gold};

    @media screen and (max-width: ${breakpoints.md}) {
        padding: 40px 60px;
    }

    @media screen and (max-width: ${breakpoints.sm}) {
        padding: 20px 40px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`;

export const CloseBtn = styled.button`
    position: fixed;
    top: 10%;
    right: 3%;
    translate: -50% -50%;
    background-color: transparent;
    border: none;
    img {
        width: 32px;
        height: 32px;
        user-select: none;
    }
`;

export default ContactModel;
