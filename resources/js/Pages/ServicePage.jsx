import {
    DesignSection,
    DevelopmentSection,
    ServiceHeroSection,
    Testimonials,
} from "@/Components";
import BaseLayout from "@/Layouts/BaseLayout";
import React from "react";

const ServicePage = ({
    heroData,
    designServiceData,
    developmentService,
    testimonials,
}) => {
    return (
        <BaseLayout>
            <ServiceHeroSection heroData={heroData} />
            <DesignSection designServiceData={designServiceData} />
            <DevelopmentSection developmentService={developmentService} />
            <Testimonials data={testimonials} noBackground />
        </BaseLayout>
    );
};

export default ServicePage;
