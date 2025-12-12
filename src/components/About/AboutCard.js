import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Parakrama Ekanayake</span>{" "}
            from <span className="purple">Kandy, Sri Lanka</span>.
            <br />
            I completed my internship as a{" "}
            <span className="purple">Autonomation Intern</span> at{" "}
            <span className="purple">MAS Innovations (Pvt) Ltd</span>.
            <br />I'm currently pursuing B.Sc in{" "}
            <span className="purple">Information Technology Specialize in Data Science</span> from{" "}
            <span className="purple">Sri Lanka Institute of Information Technology</span>.
            <br />
            <br />
            Outside of data science, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Hiking new places 🌍
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
