import React from "react";
// scss
import "./whyus.scss";
// react bootstrap
import { Container, Row, Col } from "react-bootstrap";
// icon
import { BsChevronRight } from "react-icons/bs";
// comp
import WhyCard from "./WhyCard";
// data
import { cardData } from "../../Data/Data";
// link
import { Link } from "react-router-dom";

const WhyUs = () => {
  const title = "Why Choose Medilab?";
  const text =
    "The Medical lab technology students are required in diverse areas in the medical line. They can find abundant job opportunities in the medical field and even in the medical related areas. The MLT students can even get excellent opportunities in research.";

  const btnTitle = "Learn More";

  return (
    <section id="whyUs">
      <Container>
        <Row>
          <Col xl={4} lg={10} md={10} className="mx-auto my-5 my-xl-0">
            {/* why us content */}
            <div className="content">
              <h3 className="why_title">{title}</h3>
              <p className="why_text">{text}</p>
              <div className="text-center">
                <Link to="/" className="learnMore_btn">
                  {btnTitle}
                  <span className="why_icon mx-2">
                    <BsChevronRight className="svg_icon" />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={12} md={12}>
            <Row>
              {cardData.map((card) => {
                return <WhyCard {...card} key={card.id} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
