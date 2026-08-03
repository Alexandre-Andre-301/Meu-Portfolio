import MatrixBackground from "../../Background/MatrixBackground";
import "./about.css";


export default function About() {

    return (

        <section 
            id="about"
            className="section about"
        >
            <MatrixBackground/>

            <div className="container">


                <h2 className="section-title">

                    About 
                    <span className="highlight">
                        Me
                    </span>

                </h2>



                <div className="about-card">


                    <p>

                        Sou estudante de Gestão de Sistemas Informáticos
                        focado no desenvolvimento de aplicações web modernas
                        e no estudo de segurança ofensiva.

                    </p>


                    <p>

                        A minha jornada combina desenvolvimento Fullstack,
                        arquitetura de sistemas e a curiosidade de entender
                        como aplicações podem ser protegidas contra
                        vulnerabilidades.

                    </p>


                    <p>

                        Atualmente estou a aprofundar conhecimentos em
                        React, TypeScript, FastAPI, Linux, redes e
                        metodologias como OWASP para evoluir como
                        desenvolvedor e futuro Pentester.

                    </p>


                </div>


            </div>


        </section>

    );

}