import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Link to="/">
            Health<span>Sync</span>
          </Link>
        </div>
    
        <div className={styles.social}>
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} />  
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} />  
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;