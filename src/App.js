import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './pages/Project';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
