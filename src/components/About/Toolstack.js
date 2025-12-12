import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import VS from "../../Assets/TechIcons/VS.png";
import PBI from "../../Assets/TechIcons/PowerBi.png";
import Excel from "../../Assets/TechIcons/excel.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
              <img src={Excel} alt="R" className="tech-icon-images" />
              <div className="tech-icons-text">Excel</div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <img src={PBI} alt="R" className="tech-icon-images" />
              <div className="tech-icons-text">Power BI</div>
            </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={VS} alt="VS" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
