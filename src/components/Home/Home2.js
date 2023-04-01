import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import myImg from '../../public/Assets/me2.png'
import Tilt from 'react-parallax-tilt'
import Contact from '../Contact'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              <span className="light-blue"> FALANDO </span> UM POUCO SOBRE MIM
            </h1>
            <p className="home-about-body">
              <br /> Sempre tive paixão por Tecnologia e Informática e com a
              ascendência do mercado de TI, resolvi investir nessa área,
              entrando de cabeça nos estudos de
              <i>
                <b className="light-blue"> Desenvolvimento Web</b>
              </i>
              . Hoje curso
              <b className="light-blue">
                {' '}
                Análise e Desenvolvimento de Sistemas{' '}
              </b>{' '}
              e tenho previsão de graduação em 2024.
              <br />
              <br />
              Atualmente sou fascinado pelo desenvolvimento &nbsp;
              <i>
                <b className="light-blue">Front-End </b>&nbsp;
              </i>
              e{' '}
              <i>
                <b className="light-blue">Low-Code </b>&nbsp;
              </i>{' '}
              futuramente pretendo me aprofundar mais nos estudos e me tornar um
              desenvolvedor <b className="light-blue">Fullstack.</b>
              <br />
              <br />
              Tenho me aprimorado em várias tecnologias e minhas preferidas são{' '}
              <b className="light-blue">Outsystems</b> ,{' '}
              <b className="light-blue">Bootstrap</b> e
              <i>
                <b className="light-blue"> Frameworks Javascript</b>
              </i>
              &nbsp; como
              <i>
                <b className="light-blue"> React.js </b>e{' '}
                <b className="light-blue">Next.js</b>
              </i>
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar d-flex align-self-center justify-content-center"
          >
            <Tilt>
              <Image
                src={myImg}
                className="img-thumbnail rounded-circle bg-info "
                alt="Responsive image"
                width={200}
                height={200}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Contact />
        </Row>
      </Container>
    </Container>
  )
}
export default Home2