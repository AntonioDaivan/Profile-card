import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import "../styles/about.sass";

export function About() {
  return (
    <section className="section-about">
      <div className='about-title'>
        <input type="checkbox" id="toggle-about" />
        <label htmlFor="toggle-about">
          <h2>About me</h2>
          <VscChevronDown className="arrow-down"/>
          <VscChevronUp className="arrow-up"/>
        </label>
      </div>

      <p className='about-content'>
        Oi, eu sou o Antonio Daivan! Tenho 24 anos e estou iniciando minha carreira
        como desenvolvedor web. Sou Técnico em Rede de Computadores, trabaho em um
        laboratório de análises clínicas, e, há cerca de um ano escolhi me dedicar a
        estudar esse mundo que é o desenvolvimeto de sites, softwares e afins. Tenho
        estudado algumas tecnologias, dentre elas estão as citadas acima e continuo
        buscando me aperfeiçoar. Fico feliz que tenha chegado até aqui. Abaixo estão
        minhas redes para contato, estou sempre conectado. Abraço!
      </p>
    </section>
  );
}
