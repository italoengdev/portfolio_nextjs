import { Col, Row } from 'react-bootstrap'
import {
  SiCanva,
  SiVisualstudiocode,
  SiVercel,
  SiMicrosoftexcel
} from 'react-icons/si'
import Image from 'next/image'
import OutsystemsImg from '../../public/Assets/outsystems.png'
import RevitImg from '../../public/Assets/revit.png'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel title="Excel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Image
          src={OutsystemsImg}
          alt="Outsystems Low-Code"
          title="Outsystems"
          height={100}
          width={100}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Image
          src={RevitImg}
          alt="Revit"
          title="Revit"
          height={100}
          width={100}
        />
      </Col>
    </Row>
  )
}

export default Toolstack
