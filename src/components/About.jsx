import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { useEffect } from 'react';

import "../styles/about.sass";

export function About() {

    const birth = new Date('1998-09-04T03:00:00')
    const today = new Date()

    const calculateDifferenceInYears = (initial, final) => {
        const initialYear = initial.getFullYear()
        const initialMonth = initial.getMonth()
        const initialDay = initial.getDate()
        const finalYear = final.getFullYear()
        const finalMonth = final.getMonth()
        const finalDay = final.getDate()

        let differenceInYears = finalYear - initialYear

        if(finalMonth < initialMonth || (finalMonth === initialMonth && finalDay === initialDay)){
            differenceInYears--
        }

        return differenceInYears
    }

    // useEffect(() => {calculateDifferenceInYears(birth, today)}, [])

    console.log(calculateDifferenceInYears(birth, today))

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
        Oi, eu sou o Antonio Daivan! Tenho {calculateDifferenceInYears(birth, today)} anos e estou iniciando minha carreira
        como desenvolvedor web. Sou Técnico em Rede de Computadores, trabalho em um
        laboratório de análises clínicas, e, há cerca de um ano escolhi me dedicar a
        estudar esse mundo que é o desenvolvimeto de sites, softwares e afins. Tenho
        estudado algumas tecnologias, dentre elas estão as citadas acima e continuo
        buscando me aperfeiçoar. Fico feliz que tenha chegado até aqui. Abaixo estão
        minhas redes para contato, estou sempre conectado. Abraço!
      </p>
    </section>
  );
}
