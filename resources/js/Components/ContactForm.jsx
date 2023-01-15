import { breakpoints, colors, fontSize } from "@/utils/styles";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import styled from "styled-components";

const ContactForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        number: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("contact.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                Toast.fire({
                    icon: "success",
                    title: "Send successfully",
                });
            },
        });
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <Form onSubmit={submit}>
            <div className="group">
                <label htmlFor="name">Hi! I am</label>
                <input
                    type="text"
                    placeholder="eg.Andy"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                />
            </div>
            <div className="group">
                <label htmlFor="email">Reach me at</label>
                <input
                    type="email"
                    placeholder="eg.Andy@gmail.com"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={onChange}
                />
            </div>
            <div className="group">
                <label htmlFor="number">Mobile +91</label>
                <input
                    type="number"
                    placeholder="7721866770"
                    id="number"
                    name="number"
                    value={data.number}
                    onChange={onChange}
                />
            </div>
            <Button type="submit" disabled={processing}>
                send
            </Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin-top: 24px;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
    .group {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    input {
        font: inherit;
        font-style: normal;
        font-weight: 500;
        font-size: ${fontSize.heading3};
        line-height: 45px;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${colors.gray100};
        outline: none;
        color: ${colors.white};

        &::placeholder {
            opacity: 0.4;
        }

        @media screen and (max-width: ${breakpoints.md}) {
            flex-basis: 100%;
            font-size: ${fontSize.heading5};
        }
    }

    label {
        flex: 1;
        font-style: normal;
        font-weight: 500;
        font-size: ${fontSize.heading3};
        line-height: 45px;
        display: flex;
        align-items: center;
        color: ${colors.white};
        line-break: loose;

        @media screen and (max-width: ${breakpoints.md}) {
            flex-basis: 100%;
            line-height: normal;
            font-size: ${fontSize.heading5};
        }
    }
`;
const Button = styled.button`
    margin-top: 36px;
    padding: 8px 48px;
    border-radius: 100px;
    text-transform: capitalize;
    background-color: transparent;
    border: 1px solid ${colors.gold};
    background: linear-gradient(95.18deg, #8a6d06 11.89%, #fccf31 51.85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-style: normal;
    font-weight: 700;
    font-size: ${fontSize.heading4};
    line-height: 36px;

    @media screen and (max-width: ${breakpoints.md}) {
        margin-top: 24px;
        width: 100%;
    }
`;

export default ContactForm;
