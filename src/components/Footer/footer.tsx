import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-socials">

                <a
                    href="https://github.com/Alexandre-Andre-301"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>


                <a
                    href="https://www.linkedin.com/in/alexandre-andr%C3%A9-058044294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>


                <a
                    href="mailto:alexandresjandre301@gmail.com"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>

            </div>


            <p>
                © 2026 Alexandre • Stealth & Security
            </p>

        </footer>

    );

}