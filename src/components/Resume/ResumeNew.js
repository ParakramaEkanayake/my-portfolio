import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Parakrama_Ekanayke_Resume.pdf";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setCurrentPage(1);
            }}
          >
            <div className="d-flex justify-content-center mb-3">
              <Page pageNumber={currentPage} scale={width > 786 ? 1.7 : 0.6} />
            </div>
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: 10 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <Button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={!numPages || currentPage <= 1}
              style={{
                width: 44,
                height: 44,
                padding: 0,
                borderRadius: 22,
                backgroundColor: "#6f42c1",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <AiOutlineLeft />
            </Button>

            <div style={{ display: "flex", alignItems: "center", margin: "0 8px" }}>
              {numPages ? `Page ${currentPage} of ${numPages}` : "Loading..."}
            </div>

            <Button
              onClick={() => setCurrentPage((p) => Math.min(numPages || 1, p + 1))}
              disabled={!numPages || currentPage >= (numPages || 1)}
              style={{
                width: 44,
                height: 44,
                padding: 0,
                borderRadius: 22,
                backgroundColor: "#6f42c1",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <AiOutlineRight />
            </Button>
          </div>
        </Row>

        <br />

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
