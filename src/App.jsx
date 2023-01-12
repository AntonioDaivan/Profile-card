import { About } from "./components/About";
import { Contact } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Techs } from "./components/Technologies";
import { Line } from "./components/LineSeparator";
import "./styles/globals.sass";

function App() {
  return (
    <div className="App">
      <Header />
      <Line />
      <Techs />
      <Line />
      <About />
      <Line />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
