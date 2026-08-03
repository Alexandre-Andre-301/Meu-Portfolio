import "./Terminal.css";


export default function Terminal(){

    return (

        <section className="section terminal-section">

            <div className="container">


                <h2 className="section-title">

                    Security 
                    <span className="highlight">
                        Mindset
                    </span>

                </h2>



                <div className="terminal-window">


                    <div className="terminal-header">

                        <span className="dot red"></span>

                        <span className="dot yellow"></span>

                        <span className="dot green"></span>


                        <span className="terminal-title">
                            bash — alexandre@pentest
                        </span>

                    </div>



                    <div className="terminal-body">


                        <p>
                            <span className="prompt">
                                alexandre@portfolio:~$
                            </span>

                            &nbsp; ./profile_scan.sh
                        </p>



                        <p className="response">
                            [!] Inicializando análise de competências...
                        </p>


                        <p className="response">
                            [OK] React + TypeScript verificado.
                        </p>


                        <p className="response">
                            [OK] FastAPI Backend verificado.
                        </p>


                        <p className="response">
                            [OK] Database Architecture verificada.
                        </p>


                        <p className="response">
                            [OK] Linux Environment verificado.
                        </p>


                        <p className="response">
                            [RUNNING] Offensive Security Learning...
                        </p>


                        <p className="response">
                            [STATUS] Evolução constante.
                        </p>



                        <p>

                            <span className="prompt">
                                alexandre@portfolio:~$
                            </span>

                            &nbsp;

                            <span className="cursor"></span>

                        </p>


                    </div>


                </div>


            </div>


        </section>

    )

}