import React from "react";
// scss
import "./doctor.scss";
// react bootstrap
import { Container, Row } from "react-bootstrap";
// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import AboutDoctors from "./AboutDoctors";

const Doctors = () => {
  return (
    <section id="doctors">
      <Container>
        {/* section title */}
        <SectionTitle
          title={"Doctors"}
          text={
            "In Bangladesh is on the preferred list of Indian students. There is an opportunity for Indians to do MBBS at the lowest price among foreign students. That’s why we giving here all information on the Advantage of Studying MBBS In Bangladesh For Indian Students."
          }
        />
        <Row>
          <AboutDoctors />
        </Row>
      </Container>
    </section>
  );
};

export default Doctors;
