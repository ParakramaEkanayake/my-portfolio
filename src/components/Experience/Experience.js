import React from "react";
import Card from "react-bootstrap/Card";
import { ImCheckmark } from 'react-icons/im'
import MAS from "../../Assets/MAS.png";

const experiences = [
  {
    company: "MAS Innovations (Pvt) Ltd",
    role: "Autonomation Intern",
    logo: MAS,
    period: "Jan 2025 - Aug 2025",
    responsibilities: [
      "Developed and maintained data-driven Power BI dashboards to visualize business metrics",
      "Transformed raw data into actionable insights by performing data preprocessing using Power Query and DAX",
      "Developed and deployed enterprise-level Power Apps to digitalize core processes",
      "Automated data workflows and alerts using Power Automate to streamline processes"
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <Card
      className="mb-3"
      style={{
        maxWidth: 1000,
        backgroundColor: "rgba(199,113,240,0.06)",
        border: "1px solid rgba(199,113,240,0.22)",
        borderRadius: 12,
      }}
    >
      <Card.Body style={{ display: "flex", alignItems: "center", gap: 18, padding: 20 }}>
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          style={{ width: 80, height: 80, objectFit: "contain", borderRadius: 8 }}
        />

        <div style={{ flex: 1 }}>
          <h5 style={{ margin: 0, color: "#c770f0" }}>{exp.role}</h5>
          <div style={{ color: "#ff68e3ff", fontSize: 14 }}>
            {exp.company} · {exp.period}
          </div>

          <ul style={{ marginTop: 8, marginBottom: 0, paddingLeft: 18, textAlign: "left" }}>
            {exp.responsibilities.map((r, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", color: "#f4a0e5ff" }}>
                <ImCheckmark size={18} style={{ marginRight: 8, marginTop: 4 }} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default function Experience() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <br />
      <br />
      <br />
      <br />
      {experiences.map((e, i) => (
        <ExperienceCard exp={e} key={i} />
      ))}
    </section>
  );
}
