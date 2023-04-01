import React from 'react'
import Card from 'react-bootstrap/Card'
import { SiYourtraveldottv } from 'react-icons/si'
import { CgGames } from 'react-icons/cg'
import { BiMoviePlay } from 'react-icons/bi'
import { FaSpotify } from 'react-icons/fa'



function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Olá pessoal, me chamo{' '}
            <span className="light-blue">Italo Saraiva Gonçalves </span>
            <br/>
            Sou de <span className="purple"> Teresina, Piauí, Brasil.</span>
            <br />
            Eu sou Desenvolvedor Front-End em formação.
            <br />
            <br />
            Além de estudar desenvolvimento eu também sou fascinado em...
          </p>
          <ul>
            <li className="about-activity">
              <CgGames /> Jogar Video-Games
            </li>
            <li className="about-activity">
              <BiMoviePlay /> Assistir Séries e Filmes
            </li>
            <li className="about-activity">
              <SiYourtraveldottv/> Viajar
            </li>
            <li className="about-activity">
              <FaSpotify/> <a href='https://open.spotify.com/user/12139226573'>Música</a>
            </li>
          </ul>

          <p style={{ color: 'lightblue' }}>
            "Você é o único representante de seu sonho na face da terra!"{' '}
          </p>
          <footer className="blockquote-footer">Emicida</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
