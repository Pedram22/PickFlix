import './index.css'
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import MovieInfo from './components/MovieInfo';

function App() {
  return (
    <div className="App">
    <Header />
    <MovieInfo />
    <Footer />
    </div>
  );
}

export default App;
