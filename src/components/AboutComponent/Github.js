import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Dias de <strong className="light-blue">Estudo</strong>
      </h1>
      <GitHubCalendar
        username="italoengdev"
        blockSize={15}
        blockMargin={5}
        color="#03faeb"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
