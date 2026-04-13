import React from "react";
import "../../assets/css/Home.css";
import Accordion from "react-bootstrap/Accordion";

const FaqComponent = () => {
  return (
    <section className="faq-section whychoose-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2>Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <Accordion defaultActiveKey="0" flush>

          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

      </div>
    </section>
  );
};

export default FaqComponent;