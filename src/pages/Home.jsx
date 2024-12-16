import Content from "./Content";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Content />
      <FooterComponent />
    </>
  );
};

export default Home;
