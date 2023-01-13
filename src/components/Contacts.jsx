import { ImWhatsapp, ImGithub } from "react-icons/im";
import { SiInstagram, SiLinkedin } from "react-icons/si";

import "../styles/contact.sass";

export function Contact() {
  return (
    <section className="section-contact">
      <div>
        <h2>Contact me</h2>
      </div>
      <div className="contact-group">
        <div>
          <a href="https://wa.me/5511957872839?text=" target="_blank">
            <ImWhatsapp size={30} className="whatsapp" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/antonio_daivan" target="_blank">
            <SiInstagram size={30} className="instagram" />
          </a>
        </div>
        <div>
          <a href="https://github.com/antoniodaivan" target="_blank">
            <ImGithub size={30} className="github" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/antoniodaivan/" target="_blank">
            <SiLinkedin size={30} className="linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
