import React from "react";
// scss
import "./services.scss";
// react bootstrap
import { Container } from "react-bootstrap";
// comp
import ServicesCard from "./ServicesCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Services = () => {
  return (
    <section id="services">
      <Container>
        {/* service heading and text */}
        <SectionTitle
          title={"Services"}
          text={
            "Most healthcare facilities just want more patients to know them, trust them, and schedule more appointments. That’s why we developed our own system, customized to the needs of your facility and your future patients."
          }
        />
        {/* component */}
        <ServicesCard />
      </Container>
    </section>
  );
};

export default Services;
