import "../styles/footer.css";
import logo from "../assets/Logo.png"; // your logo file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
                {/* Divider */}
        <div className="footer__divider"></div>

        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__left"></div>

          <div className="footer__right">
            <a href="#invite" className="footer__button">
              Request Invite
            </a>

            <a href="#" className="footer__link">
              Terms & Conditions
            </a>

            <a href="#" className="footer__link">
              Privacy policy
            </a>
          </div>
        </div>



        {/* Bottom Section (Logo only) */}
        <div className="footer__bottom">
          <img src={logo} alt="Honestly Logo" className="footer__logo" />
        </div>

      </div>
    </footer>
  );
}