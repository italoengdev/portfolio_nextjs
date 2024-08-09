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
  <span className="light-blue">FALANDO </span> UM POUCO SOBRE MIM
</h1>
<p className="home-about-body">
  <br /> Sempre tive paixão por Tecnologia e Informática e com a ascendência do mercado de TI, resolvi investir nessa área, entrando de cabeça nos estudos de
  <i>
    <b className="light-blue"> Desenvolvimento Web</b>
  </i>
  . Formado em
  <b className="light-blue">
    {' '} Análise e Desenvolvimento de Sistemas{' '}
  </b>
  , sou desenvolvedor fullstack no-code e low-code, focado em
  <b className="light-blue"> Bubble.io </b> e
  <b className="light-blue"> FlutterFlow </b>.
  <br />
  <br />
  Atualmente sou fascinado pelo desenvolvimento &nbsp;
  <i>
    <b className="light-blue">Front-End </b>&nbsp;
  </i>
  e&nbsp;
  <i>
    <b className="light-blue">Back-End</b>&nbsp;
  </i>
  e futuramente pretendo me aprofundar mais nos estudos e me tornar um desenvolvedor <b className="light-blue">Fullstack.</b>
  <br />
  <br />
  Tenho me aprimorado em várias tecnologias e minhas preferidas são&nbsp;
  <b className="light-blue">TailwindCSS</b>,&nbsp;
  <b className="light-blue">Bootstrap</b> e&nbsp;
  <i>
    <b className="light-blue"> Frameworks</b>
  </i>
  &nbsp; como&nbsp;
  <i>
    <b className="light-blue"> Django </b> e&nbsp;
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