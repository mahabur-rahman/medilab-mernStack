import React from "react";
// scss
import "./faq.scss";
// react bootstrap
import { Container } from "react-bootstrap";
// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  return (
    <section id="faq">
      <Container>
        {/* section title */}
        <SectionTitle
          title={"Frequently Asked Questions"}
          text={
            "Apply for Passport refer Government of India Passport Seva Kendra website and apply online www.passport.gov.in"
          }
        />
        <FaqAccordion />
      </Container>
    </section>
  );
};

export default FAQ;
