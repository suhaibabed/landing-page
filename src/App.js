import "./index.css";
import { MainContainer } from "./App.Styles";
import NavbarWithHero from "./components/NavbarWithHero/NavbarWithHero.jsx";
function App() {
  return (
    <>
      
      <MainContainer className="App">
        <NavbarWithHero />
        <h1>hello </h1>
      </MainContainer>
    </>
  );
}

export default App;
