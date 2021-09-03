// Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
// Import Global Style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
