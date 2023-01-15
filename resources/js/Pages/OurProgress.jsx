import {
    ProgressHeroSection,
    ProgressDetail,
    Testimonials,
} from "@/Components";
import BaseLayout from "@/Layouts/BaseLayout";
import { breakpoints } from "@/utils/styles";
import React from "react";
import styled from "styled-components";

const OurProgess = ({ heroData, progressDetail, testimonials }) => {
    return (
        <BaseLayout>
            <ProgressHeroSection heroData={heroData} />
            <Blob />
            {progressDetail.map((item, index) => (
                <ProgressDetail
                    key={index}
                    title={item.title}
                    text={item.text}
                    img={item.image}
                    reverse={item.reverse}
                />
            ))}
            <Testimonials data={testimonials} noBackground />
        </BaseLayout>
    );
};

export const Blob = styled.div`
    position: absolute;
    width: 607px;
    height: 517px;
    right: 30%;
    top: 150%;
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

export default OurProgess;
