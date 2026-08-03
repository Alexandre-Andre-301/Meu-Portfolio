import "./navbar.css";


export default function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar-container">


                <a 
                    href="#home" 
                    className="logo"
                >
                    ALEX<span>ANDRE</span>
                </a>



                <nav className="nav-links">

                    <a href="#about">
                        About
                    </a>


                    <a href="#skills">
                        Skills
                    </a>


                    <a href="#projects">
                        Projects
                    </a>


                    <a 
                        href="#contact"
                        className="contact-link"
                    >
                        Contact
                    </a>


                </nav>


            </div>


        </header>

    );

}