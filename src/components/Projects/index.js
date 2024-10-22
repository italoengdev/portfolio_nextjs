import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import interview from '../../public/Assets/Projects/1-interview.png'
import dashboard from '../../public/Assets/Projects/2-dashboard.png'
import galoa from '../../public/Assets/Projects/3-galoa.png'
import bootstrap from '../../public/Assets/Projects/4-bootstrap.png'
import cpf from '../../public/Assets/Projects/5-cpf.png'
import calc from '../../public/Assets/Projects/6-calc.png'
import kanban from '../../public/Assets/Projects/7-kanban.png'
import port from '../../public/Assets/Projects/8-port.png'
import nextjs from '../../public/Assets/Projects/9-nextjs.png'
import Outsystems1 from '../../public/Assets/Projects/outsystems1.png'
import Outsystems2 from '../../public/Assets/Projects/outsystems2.png'
import meni1 from '../../public/Assets/meni.png'
import pet from '../../public/Assets/petconnect.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Meus <strong className="light-blue">Projetos </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Alguns projetos que venho trabalhando...
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meni1}
              isBlog={true}
              title="Mení Digital"
              description="Mení é a solução completa de atendimento e marketing em bares e restaurantes, proporcionando uma nova experiência com ferramentas inteligentes e inovadoras. Desenvolvido em Bubble.io e JavaScript"
              ghLink="https://meni.digital/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet}
              isBlog={true}
              title="PetConnect"
              description="An app with FlutterFlow, Firebase, Google Cloud, and Meta API for enhanced user experiences"
              ghLink="https://pet-connect-mvp.flutterflow.app/homepage"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="Interview Pokemon-Style"
              description="Projeto pessoal desenvolvido para o treino de Async, Promises, QuerySelectors, Conditionals e Bootstrap. Trata-se de uma simulação de uma Entrevista de Contratação. O Tech Recruiter e o Dev travam uma luta no estilo Batalha Pokemon! Haha! Jogue, faça seu Dev vitorioso e consiga sua vaga. Dica: Estude as Linguagens e Frameworks e vire um Dev FullStack!."
              ghLink="https://github.com/italoengdev/Interview_Fight"
              demoLink="https://interview-fight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Medical Dashboard"
              description="Projeto desenvolvido para teste de vaga de estágio. Se trata de um Dashboard para uma clínica médica. Funcionalidades:
              HTML TAGs,
              CSS styles,
              Bootstrap 5.2,
              FullCalendar JavaScript Plugin and SETUP (https://fullcalendar.io/),
              DOM events,
              AJAX requests,
              Arrays Manipulation (map,filter.sort),
              Regular Expressions &
              sessionStorage"
              ghLink="https://github.com/italoengdev/Medical-Dashboard"
              demoLink="https://teste-medical-dashboard.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextjs}
              isBlog={false}
              title="Witchercord"
              description="Projeto desenvolvido para estudos de ReactJS, NextJS e Supabase. Feito com a ajuda da Alura.
              Funcionalidades:
              useState,
              useRouter,
              useEffect.
              "
              ghLink="https://github.com/italoengdev/imersao_react"
              demoLink="http://imersao-react-pearl.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Outsystems1}
              isBlog={false}
              title="Alkabot Blog"
              description="A aplicação é uma lista de usuários e posts com comentários consumida a partir da API pública JSONPlaceholder. Ao clicar em um usuário da lista, é possível ver mais informações sobre ele, incluindo nome, username, email, telefone, website, endereço e informações da empresa. Ao clicar nos Posts é possível ver os comentários e informações de quem os fez."
              ghLink="https://github.com/italoengdev/testefrontendjr"
              demoLink="https://testefrontendjr.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Outsystems2}
              isBlog={false}
              title="CRUD Fullstack"
              description="This is a sample application built on Next.js and Tailwind CSS that allows users to perform CRUD operations on an API built on Django. The application is deployed on Vercel."
              ghLink="https://github.com/italoengdev/django_api_frontend"
              demoLink="https://django-api-frontend.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootstrap}
              isBlog={false}
              title="Landing Page: Fruta e Fruto"
              description="Projeto desenvolvido para estudos de HTML, CSS e Bootstrap 5.2. Feito com a ajuda da Alura.
              Funcionalidades:
              Animações CSS,
              Bootstrap,
              "
              ghLink="https://github.com/italoengdev/bootstrap_5_project_study"
              demoLink="https://bootstrap-5-project-study.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban Page Plan"
              description="Projeto desenvolvido para estudos de HTML, CSS E JS. Feito com a ajuda da DrivenEducation.   Funcionalidades:
              HTML TAGs
              CSS styles
              Métodos Javascript
              Manipulação DOM"
              ghLink="https://github.com/italoengdev/Kanban-page-plan"
              demoLink="https://kanban-page-plan.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfólio Test"
              description="Projeto desenvolvido durante o curso da #GamaAcademy na jornada da Hiring Coders.Site teste para meu portfólio.  Funcionalidades:
              Animações CSS
              Feature FlexBox DESAFIO
              Responsivo
              Ícones Adicionados"
              ghLink="https://github.com/italoengdev/CSS-Project-HC--3"
              demoLink="https://css-project-hc-3.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galoa}
              isBlog={false}
              title="Galoá Test Intern"
              description="Projeto desenvolvido para teste de vaga de estágio. Site para congressos e artigos científicos. Ainda em progresso, falta responsividade.  Funcionalidades:
              Animações CSS,
              CSS Grid/Flex,
              Manipulação do DOM com controllers JS,
              Template string"
              ghLink="https://github.com/italoengdev/teste-frontend-galo-"
              demoLink="https://teste-frontend-galo.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cpf}
              isBlog={false}
              title="CPF Validador"
              description="Projeto desenvolvido durante o curso da #GamaAcademy na jornada da Hiring Coders para validação de um numero de CPF XXXXXXXX-XX. 
              Funcionalidades:
              Manipulação do DOM(getElementById),
              Funções JS(substring e charAt),
              Validação de números,
              Condicionais For/If
              "
              ghLink="https://github.com/italoengdev/cpfvalidator"
              demoLink="http://cpfvalidator.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculadora React"
              description="Projeto desenvolvido durante o curso da #Cod3r Webmoderno 2022. 
              Funcionalidades:
              Condicionais,
              ReactJS,
              Componentização.
              "
              ghLink="https://github.com/italoengdev/calculadora"
              demoLink="http://calculadora-react-rust.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
