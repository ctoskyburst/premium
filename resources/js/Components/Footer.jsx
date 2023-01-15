import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { links } from "./Navbar";
const Footer = () => {
    return (
        <FooterWrapper>
            <Title>
                <img
                    src="/images/logo.svg"
                    alt="logo"
                    style={{ width: "220px" }}
                />
            </Title>
            <Links>
                {links.map(({ name, link }, index) => (
                    <li key={index}>
                        <Link href={route(link)}>{name}</Link>
                    </li>
                ))}
            </Links>
            <SocialLinks>
                <li>
                    <a href="#">
                        <FaFacebookF size={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaTwitter size={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaInstagram size={30} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <IoMdMail size={30} />
                    </a>
                </li>
            </SocialLinks>
            <Copyright>
                &copy;-{new Date().getFullYear()} <b>skyburst dev</b> All rights
                reserved.
            </Copyright>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    width: 100%;
    margin: auto;
    min-height: 400px;
    padding-inline: ${spacing.xxxxl};
    padding-block: ${spacing.xl};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading2};
    line-height: 63px;
    color: ${colors.white};
    text-transform: capitalize;

    @media screen and (max-width: ${breakpoints.sm}) {
        margin-bottom: ${spacing.lg};
    }
`;
const Links = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;

    @media screen and (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        padding: 0;
        margin-bottom: ${spacing.lg};
        gap: 16px;
    }

    @media screen and (max-width: ${breakpoints.lg}) {
        flex-wrap: wrap;
    }

    a {
        font-style: normal;
        font-weight: 400;
        font-size: ${fontSize.heading4};
        line-height: 36px;
        text-transform: capitalize;
        color: rgba(255, 255, 255, 0.6);
    }
`;
const SocialLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 56px;

    @media screen and (max-width: ${breakpoints.sm}) {
        padding: 0;
        margin-bottom: ${spacing.lg};
    }
`;
const Copyright = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: ${fontSize.smText};
    line-height: 18px;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.6);
`;

export default Footer;
