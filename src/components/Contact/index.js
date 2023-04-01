import { Container, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail
} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

function Contact() {
  return (
    <div>
      <Container fluid>
        <Col md={12} className="home-about-social">
          <h1>Entre em Contato</h1>
          <p>
            Sinta-se a vontade para me{' '}
            <span className="light-blue">seguir </span> e trocar uma ideia!
          </p>
          <ul className="home-about-social-links row">
            <li className="social-icons col-4 col-md-2">
              <a
                href="https://github.com/italoengdev"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons col-4 col-md-2">
              <a
                href="https://twitter.com/italo_sg"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons col-4 col-md-2">
              <a
                href="https://www.linkedin.com/in/italoengdev/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons col-4 col-md-2">
              <a
                href="https://www.instagram.com/italo_sg/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons col-4 col-md-2">
              <a
                href="https://whatsa.me/5586999843969/?t=Ol%C3%A1%20Italo!"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="social-icons col-4 col-md-2">
              <a
                href="mailto:italo_saraiva182@hotmail.com?Subject=Ol%E1%20Italo%2C%20Tudo%20bem%3F&Body=Gostaria%20de%20conversar%20com%20voc%EA%21"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </div>
  )
}

export default Contact
