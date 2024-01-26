import { Technology } from './Technology';
import { DiCss3, DiHtml5, DiSass, DiNodejsSmall, DiReact, DiGithubBadge, DiLinux, DiGit, DiMongodb } from 'react-icons/di';
import { SiJavascript, SiBootstrap, SiTailwindcss } from 'react-icons/si';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

import '../styles/technologies.sass';

export function Techs() {
    return (
        <section className="section-techs">
            <div className="title">
                <input type="checkbox" id="toggle" />
                <label htmlFor="toggle">
                    <h2>Technologies</h2>

                    <VscChevronDown className="arrow-down" />
                    <VscChevronUp className="arrow-up" />
                </label>
            </div>
            <div className="tech-group">
                <Technology name="HTML5" bg="#E96228" icon={<DiHtml5 />} />
                <Technology name="CSS3" bg="#0496ff" icon={<DiCss3 />} />
                <Technology name="JS" text="#000" bg="#e4c116" icon={<SiJavascript />} />
                <Technology name="Bootstrap" bg="#7b2cbf" icon={<SiBootstrap />} />
                <Technology name="Sass" bg="#d81159" icon={<DiSass />} />
                <Technology name="Tailwind" text="#000" bg="#07b6d5" icon={<SiTailwindcss />} />
                <Technology name="Node" text="#000" bg="#3C823B" icon={<DiNodejsSmall />} />
                <Technology name="React" text="#000" bg="#61DAFB" icon={<DiReact />} />
                <Technology name="Git" bg="#E94D30" icon={<DiGit />} />
                <Technology name="GitHub" bg="#1A1D22" icon={<DiGithubBadge />} />
                <Technology name="Linux" bg="#1A1D22" icon={<DiLinux />} />
                <Technology name="MongoDb" text="#000" bg="#3C823B" icon={<DiMongodb />} />
            </div>
        </section>
    );
}
