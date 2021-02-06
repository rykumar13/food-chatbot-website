import Header from "./components/header";
import Head from "./components/head";
import Footer from "./components/footer";
import Landing from "./components/sections/landing";
import ChatbotArea from "./components/sections/ChatbotArea";
import Trending from "./components/sections/trending";
import About from "./components/sections/about";
import GlobalStyle from "./styles/GlobalStyle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Head />
      <Header />
      <Landing />
      <ChatbotArea />
      <Trending />
      <About />
      <Footer />
    </div>
  );
}

export default App;
