import React from "react";
// scss
import "./department.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import DepTabs from "./DepTabs";

const Departments = () => {
  return (
    <section id="departments">
      <Container>
        {/* title */}
        <SectionTitle
          title={"Departments"}
          text={
            "Hospitals vary widely in the services they offer and therefore, in the departments they have. Hospitals may have acute services such as an emergency department or specialist trauma center"
          }
        />

        {/* tabs component */}
        <DepTabs />
      </Container>
    </section>
  );
};

export default Departments;
