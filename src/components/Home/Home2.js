import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate Data Science undergraduate with strong analytical skills and hands-on experience in Python, R, and SQL. I enjoy solving real-world problems through data-driven insights, predictive modeling, and machine learning. I’m continuously exploring new technologies and building practical solutions that create meaningful impact.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, R, PowerBI, Excel, Machine Learning, Deep learning, and JavaScript{" "}
                </b>
              </i>
              — and I enjoy working across both Data Analzing and AI Automation.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Ai models, Automate flows,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Puthon </b> and modern technologies like{" "}
              <i>
                <b className="purple">Machine Learning</b> and{" "}
                <b className="purple">Deep Learning</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
