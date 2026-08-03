import "./hero.css";
import {useHeroAnimation} from "../../hooks/useHeroAnimation";

export default function Hero() {

    useHeroAnimation()
    
    return (

        <section 
            id="home"
            className="hero"
        >
            

            <div className="container hero-content">


                <span className="hero-badge">
                    Disponível para Projetos
                </span>



                <h1>

                    Backend Developer

                    <br />

                    <span className="highlight">
                        Future Pentester
                    </span>

                </h1>



                <p>

                    Desenvolvedor focado em criar aplicações modernas
                    enquanto exploro segurança ofensiva, arquitetura
                    de sistemas e proteção de aplicações web.

                </p>



                <div className="hero-buttons">


                    <a 
                        href="#projects"
                        className="btn-primary"
                    >
                        Explorar Projetos
                    </a>



                    <a 
                        href="/Alexandre_Andre_CV.pdf"
                        download
                        className="btn-secondary"
                    >
                        Download CV
                    </a>


                </div>


            </div>


        </section>

    );

}