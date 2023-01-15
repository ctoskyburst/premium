import { breakpoints, colors, fontSize, spacing } from "@/utils/styles";
import React from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from "react-icons/ai";
import { Pagination } from "swiper";
import { useWindowSize } from "react-use";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ data, loop, noBackground }) => {
    const { width } = useWindowSize();

    const getSize = (width) => {
        if (width < 737) return 1;
        if (width < 1133) return 2;

        return 3;
    };

    return (
        <TestimonialWrapper noBackground={noBackground}>
            <div className="overlay"></div>
            <Slider>
                <h2>What our clients saying</h2>
                <SwiperWrapper>
                    <Swiper
                        slidesPerView={getSize(width)}
                        spaceBetween={48}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        grabCursor={true}
                        loop={loop}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {data.map(
                            (
                                { image, name, designation, stars, text },
                                index
                            ) => (
                                <SwiperSlide key={index}>
                                    <div className="card_header">
                                        <div className="card_header_content">
                                            <div className="avatar">
                                                <img
                                                    loading="lazy"
                                                    src={image}
                                                    alt={name}
                                                />
                                            </div>
                                            <div className="details">
                                                <div className="name">
                                                    {name}
                                                </div>
                                                <div className="designation">
                                                    {designation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="stars">
                                            {new Array(stars)
                                                .fill(1)
                                                .map((_, index) => (
                                                    <AiTwotoneStar
                                                        key={index}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="card_details">
                                        <p>{text}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </SwiperWrapper>
            </Slider>
        </TestimonialWrapper>
    );
};

const TestimonialWrapper = styled.div`
    width: 100%;
    min-height: 600px;
    margin-top: 50px;
    position: relative;
    overflow-x: hidden;

    ${(props) =>
        !props.noBackground &&
        css`
            background-image: url("/images/client_bg.png");
            background-size: cover;
            background-position: center;
        `}

    @media screen and (max-width: ${breakpoints.md}) {
        padding-inline: ${spacing.md};
        margin-top: 0;
    }

    .overlay {
        position: absolute;
        width: 100vw;
        top: 0;
        left: 0;
        height: 100%;
        pointer-events: none;

        background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    }
`;

const Slider = styled.div`
    z-index: 10;
    padding-block: ${spacing.xxxxl};
    padding-inline: ${spacing.lg};
    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: ${fontSize.heading2};
        line-height: 63px;
        text-transform: capitalize;
        text-align: center;
        color: ${colors.white};

        @media screen and (max-width: ${breakpoints.md}) {
            font-size: ${fontSize.heading4};
        }
    }
`;

const SwiperWrapper = styled.div`
    margin-top: 100px;
    .swiper {
        width: 100%;
        min-height: 300px;

        @media screen and (max-width: ${breakpoints.md}) {
            min-height: 300px;
            height: auto;
        }
    }

    .swiper-pagination-bullet {
        background-color: ${colors.gray100};
    }

    .swiper-pagination-bullet-active {
        background-color: ${colors.gold};
    }

    .swiper-slide {
        min-height: 250px;
        background: ${colors.black};
        border-radius: 8px;
        color: ${colors.white};
        border: 1px solid;
        padding: 30px;
        border: 1px solid ${colors.gold};
        border-radius: 8px;

        @media screen and (max-width: ${breakpoints.md}) {
            min-height: 250px;
            height: auto;
        }

        .avatar {
            width: 56px;
            height: 56px;

            img {
                border-radius: 50%;
            }
        }

        .card_header_content {
            display: flex;
            align-items: flex-start;
            gap: ${spacing.md};

            @media screen and (max-width: ${breakpoints.md}) {
                align-items: center;
                text-align: center;
                flex-direction: column;
                gap: ${spacing.sm};
            }
        }

        .card_header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;

            @media screen and (max-width: ${breakpoints.md}) {
                flex-direction: column;
                align-items: center;
                gap: ${spacing.sm};

                .details {
                    display: flex;
                    flex-direction: column;
                    gap: ${spacing.sm};
                }
            }

            .name {
                font-style: normal;
                font-weight: 700;
                font-size: ${fontSize.paragraph};
                line-height: 24px;
                letter-spacing: 0.5px;
                text-transform: capitalize;
                color: ${colors.white};

                @media screen and (max-width: ${breakpoints.md}) {
                    font-size: ${fontSize.heading4};
                }
            }
            .designation {
                font-style: normal;
                font-weight: 500;
                font-size: ${fontSize.paragraph};
                line-height: 24px;
                letter-spacing: 0.5px;
                color: ${colors.gray200};
                text-transform: capitalize;
            }
            .stars {
                display: flex;
                gap: 8px;
                align-items: center;
                color: ${colors.gold};
            }
        }

        .card_details p {
            font-style: normal;
            font-weight: 400;
            font-size: ${fontSize.paragraph};
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #fafafa;

            @media screen and (max-width: ${breakpoints.sm}) {
                text-align: center;
            }
        }
    }
`;

export default Testimonials;
