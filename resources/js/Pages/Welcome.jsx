import React from "react";
import { Head } from "@inertiajs/inertia-react";
import {
    HeroSection,
    ReasonSection,
    Services,
    Testimonials,
} from "@/Components";
import BaseLayout from "@/Layouts/BaseLayout";

export default function Welcome({
    heroData,
    designServiceData,
    developmentService,
    testimonials,
    chooseUsData,
}) {
    return (
        <BaseLayout>
            <Head title="Welcome" />
            <HeroSection heroData={heroData} />
            <Services {...{ designServiceData, developmentService }} />
            <Testimonials data={testimonials} loop={true} />
            <ReasonSection chooseUsData={chooseUsData} />
        </BaseLayout>
    );
}
