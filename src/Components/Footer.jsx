import logo from "../assets/footer_logo.png"


function Footer() {
  return (
    <footer>
      <img src={logo} alt='logo du site'/>
      <p>©2020 Kasa. All<br/> rights reserved</p>
    </footer>

  );
}

export default Footer;