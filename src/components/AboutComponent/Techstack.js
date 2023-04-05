import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,DiDjango,DiPython
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";
import { BsFillBootstrapFill} from "react-icons/bs";
import { AiOutlineConsoleSql} from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBootstrapFill title="Bootstrap" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango title="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="ReactJS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="NextJS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase title="Firebase"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="TailwindCss" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql title="SQL" />
      </Col>
    </Row>
  );
}

export default Techstack;
