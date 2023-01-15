import {
    ContactModel,
    Footer,
    Navbar,
    QuoteSection,
    ThanksModel,
} from "@/Components";
import React, { useState } from "react";

const BaseLayout = ({ children }) => {
    const [contactModelOpen, setContactModelOpen] = useState(false);
    const [thanksModelOpen, setThanksModelOpen] = useState(false);
    return (
        <>
            <Navbar />
            {contactModelOpen && (
                <ContactModel setContactModelOpen={setContactModelOpen} />
            )}
            {thanksModelOpen && (
                <ThanksModel setThanksModelOpen={setThanksModelOpen} />
            )}
            {children}
            <QuoteSection setContactModelOpen={setContactModelOpen} />
            <Footer />
        </>
    );
};

export default BaseLayout;
