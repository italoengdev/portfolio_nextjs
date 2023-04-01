import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  useEffect(() => {
    const handleResize = () => {
      const width = document.getElementById('resume-container').clientWidth
      setPageNumber(width > 786 ? 1 : 2)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container fluid>
      <Row>
        <div id="resume-container" style={{ width: '100%', height: '100vh' }}>
          <Document
            file="https://github.com/italoengdev/portfolio_nextjs/raw/main/src/public/Assets/Curr%C3%ADculo%20-%20Est%C3%A1gio%20-%20italoengdev.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </Row>

      <Row
        style={{
          justifyContent: 'center',
          position: 'absolute',
          bottom: '1rem'
        }}
      >
        <Button
          variant="primary"
          href="https://github.com/italoengdev/portfolio_nextjs/raw/main/src/public/Assets/Curr%C3%ADculo%20-%20Est%C3%A1gio%20-%20italoengdev.pdf"
          download
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  )
}

export default Resume
