import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img from '../../public/Assets/me.png'
import Image from 'next/image'
import Home2 from './Home2'
import Type from './Type'

function Home() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col
              md={4}
              style={{ padding: 20 }}
              className="d-flex align-self-center justify-content-center"
            >
              <Image
                src={Img}
                alt="home pic"
                className="img-thumbnail rounded-circle"
                width={200}
                height={200}
              />
            </Col>

            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <i>{`<Hello World!/>`}</i>
              </h1>

              <div className="row">
                <div className="col-12 col-md-4">
                  <h1 className="heading-name text-center">
                    Eu sou
                  </h1>
                </div>
                <div className="col-12 col-md-8 mt-2">
                  <h1 className="main-name text-center">
                    ITALO SARAIVA GONÇALVES
                  </h1>
                </div>
              </div>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </div>
  )
}

export default Home
