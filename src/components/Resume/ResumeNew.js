import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink =
  'https://raw.githubusercontent.com/italoengdev/portfolio_nextjs/main/src/public/Assets/Curr%C3%ADculo%20-%20Est%C3%A1gio%20-%20italoengdev.pdf'

function ResumeNew() {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <div>
      <Container fluid className="resume-section">
        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page
              pageNumber={1}
              scale={width > 786 ? 1.7 : 0.6}
              noData={true}
            />
          </Document>
        </Row>

        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href="https://raw.githubusercontent.com/italoengdev/portfolio_nextjs/main/src/public/Assets/Curr%C3%ADculo%20-%20Est%C3%A1gio%20-%20italoengdev.pdf"
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  )
}

export default ResumeNew
