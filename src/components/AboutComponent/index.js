import { Container, Row, Col } from 'react-bootstrap'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import Toolstack from './Toolstack'

import mE from '../../public/Assets/me4.jpeg'
import Image from 'next/image'

export default function AboutComponentIndex() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={5}
            style={{ paddingTop: '50px', paddingBottom: '50px' }}
            className="about-img"
          >
            <Image src={mE} className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px'
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              <strong className="light-blue">Conheça-me </strong>um pouco
              mais...
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong className="light-blue">Profissionais</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="light-blue">Programas</strong> que domino
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  )
}
