import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Fullstack",
          "Entusiasta de Tecnologia",
          "Desenvolvedor Low-Code",
          "Engenheiro Civil",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
