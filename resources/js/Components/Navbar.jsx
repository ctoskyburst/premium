import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import styled, { css } from "styled-components";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useState } from "react";
import { useWindowSize } from "react-use";

export const links = [
    { name: "home", link: "home.index" },
    { name: "services", link: "services.index" },
    { name: "our progress", link: "progress.index" },
    { name: "about", link: "about.index" },
    { name: "contact", link: "contact.index" },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { width } = useWindowSize();
    return (
        <NavContainer>
            <Logo>
                <Link href={route("home.index")}>
                    <img
                        src="/images/logo.svg"
                        alt="logo"
                        style={{ width: "220px" }}
                    />
                </Link>
            </Logo>

            <IoMenu
                className="hamberger-menu"
                size={fontSize.heading3}
                color={colors.white}
                onClick={() => setMobileMenuOpen(true)}
            />

            {mobileMenuOpen && width <= 700 && (
                <MobileNavLinks>
                    <div className="blog"></div>
                    <div className="icon">
                        <IoCloseSharp
                            className="close-icon"
                            size={fontSize.heading3}
                            color={colors.white}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                    </div>
                    {links.map(({ name, link }, index) => (
                        <MobileNavLink
                            key={index}
                            active={route().current(link)}
                        >
                            <Link
                                onClick={() => setMobileMenuOpen(false)}
                                href={route(link)}
                            >
                                {name}
                            </Link>
                        </MobileNavLink>
                    ))}
                </MobileNavLinks>
            )}

            <NavLinks>
                {links.map(({ name, link }, index) => (
                    <NavLink key={index} active={route().current(link)}>
                        <Link href={route(link)}>{name}</Link>
                    </NavLink>
                ))}
            </NavLinks>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    width: 100%;
    min-height: 80px;
    padding-inline: ${spacing.xxxxl};
    padding-block: ${spacing.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamberger-menu {
        display: none;
    }

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};

        .hamberger-menu {
            display: block;
        }
    }
`;
const Logo = styled.div`
    a {
        font-size: ${fontSize.heading3};
        font-weight: 600;

        &:hover {
            color: ${colors.white};
        }

        .animate {
            transition: all 600ms ease;
        }

        &:hover .animate {
            color: ${colors.gold};
        }
    }
`;
const NavLinks = styled.ul`
    flex-basis: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: ${spacing.md};

    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }
`;
const NavLink = styled.li`
    position: relative;

    a {
        font-size: ${fontSize.heading4};
        text-transform: uppercase;

        &:hover {
            color: ${colors.white};
        }
    }

    &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 3px;
        background: linear-gradient(175.9deg, ${colors.darkLinearGradient});
        bottom: -8px;
        left: 0;
        border-radius: 20px;
        transition: all 300ms ease;
    }

    &:hover {
        &::after {
            width: 100%;
        }
    }

    ${(props) =>
        props.active &&
        css`
            &::after {
                width: 100%;
            }
        `};
`;

const MobileNavLinks = styled.ul`
    position: fixed;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: ${colors.black};
    z-index: 999;

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 80%;
    }

    .blog {
        width: 100%;
        height: 300px;

        position: absolute;
        right: 50%;
        top: 50%;
        translate: 50% -50%;
        opacity: 0.9;
        pointer-events: none;
        z-index: -1;

        background: linear-gradient(320.34deg, #8a6d06 37.91%, #ffc700 74.99%);
        filter: blur(395px);
        transform: rotate(-180deg);
    }

    .icon {
        display: flex;
        justify-content: flex-end;
        padding: ${spacing.md};
    }
`;
const MobileNavLink = styled.li`
    padding: 36px;

    a {
        text-transform: capitalize;
        font-size: ${fontSize.heading5};
        font-weight: 500;

        ${(props) =>
            props.active &&
            css`
                font-weight: 600;
                background: linear-gradient(
                    95.08deg,
                    #8a6d06 15.96%,
                    #fccf31 93.04%
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            `};
    }
`;

export default Navbar;
