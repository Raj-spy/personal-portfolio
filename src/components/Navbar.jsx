import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center py-6">
            <div className="m-8 flex items-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/raj-tayde-a3072b30a/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="LinkedIn">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/Raj-spy"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub">
                    <FaGithub />
                </a>

                <a href="https://www.instagram.com/rajj_704/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram">
                    <FaInstagram />
                </a>

                <a href="https://x.com/home?lang=en"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Twitter">
                    <FaTwitter />
                </a>

                <a href="https://www.facebook.com/yourfacebook"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Facebook">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
