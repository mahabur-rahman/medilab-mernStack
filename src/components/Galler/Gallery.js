import React from "react";
// scss
import "./gallery.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";

// comp
import SectionTitle from "../SectionTitle/SectionTitle";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  return (
    <section id="gallery">
      <Container fluid>
        <Row>
          <Col xl={10} className="mx-auto">
            <SectionTitle
              title={"Gallery"}
              text={
                "Clinical Skills Education and Technology Center. By applying our knowledge base in a simulated patient interaction or to solve clinical case studies, we can hone our skills and really solidify our understanding of medicine"
              }
            />
          </Col>
        </Row>
        <Row className="gy-0 mt-3">
          <GalleryItem />
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
