import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
  margin-top: 2rem;

  .footer-address {
    margin-bottom: 2rem;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-links ul {
    list-style: none;
  }

  .footer-links ul li a {
    text-decoration: none;
    color: #fff;
    margin-bottom: 1rem;
  }

  .footer-help {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-help ul {
    list-style: none;
  }

  .footer-help ul li a {
    text-decoration: none;
    color: #fff;
    margin-bottom: 1rem;
  }

  .footer-newsletter {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .footer-newsletter input {
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-newsletter button {
    padding: 0.5rem;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
  }

  .footer-copywright {
    margin-bottom: 2rem;
  }

    @media screen and (min-width: 1200px) and (max-width: 1920px) {

        flex-direction: row;

    
`;

const Footer = () => {
  return (
    <Container>
      <div className="footer-address">
        <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
      </div>
      <div className="footer-links">
        <h2>Links</h2>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-help">
        <h2>Help</h2>
        <ul>
          <li>
            <a>Payment Options</a>
          </li>
          <li>
            <a>Returns</a>
          </li>
          <li>
            <a>Privacy Policies</a>
          </li>
        </ul>
      </div>
      <div className="footer-newsletter">
        <h2>Newsletter</h2>
        <input type="text" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <p className="footer-copywright">
        2022 Meubel House. All rights reverved
      </p>
    </Container>
  );
};

export default Footer;
