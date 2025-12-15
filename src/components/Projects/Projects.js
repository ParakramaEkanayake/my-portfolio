import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/kone.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/DWBI.gif";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Data Warehousing"
              description="This project focuses on designing and implementing a complete Data Warehousing and Business Intelligence solution. It involves selecting a novel OLTP dataset, developing a dimensional data warehouse schema, performing ETL processes using SQL Server Integration Services (SSIS), and generating BI insights through analytical queries and visualizations. The project demonstrates the ability to transform raw transactional data into meaningful business insights through structured data modeling, efficient ETL workflows, and reporting."
              ghLink="https://github.com/IT22267122/Data-Warehouse"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Salary Prediction Web App"
              description="Modern web application for predicting IT employee salaries based on various input features using machine learning algorithms. The app provides an intuitive user interface for users to input their details and receive accurate salary predictions. It leverages a pre-trained machine learning model to analyze the input data and generate predictions in real-time. The application is built using Streamlit based on python."
              ghLink="https://github.com/LimethK/SalaryPred"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="End-to-End Text Summarization and Analysis System"
              description="Implemented a web app for summarize large corpus of text using t5-large model, and used sentiment analysis, keyword extraction, topic modeling for large text"
              ghLink="https://github.com/IT22267122/Text-Summarizer"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="K-One - Gym Management System"
              description="Expanded a user-friendly web application for a Gymnasium with OTP generation and report generation for users and administrators. Implemented features such as membership management, class scheduling, trainer profiles, and payment processing using MERN stack."
              ghLink="https://github.com/Yash0dara/K-One-fitness-center"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
