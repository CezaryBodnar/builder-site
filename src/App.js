import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Services from './components/Services'
import Construction from './components/Construction'
import Home from './components/Home'
import ScrollToTop from "react-scroll-to-top";
import './components/mediaquery.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/construction" component={Construction} />
        </Switch>
      </div>
      <footer>
        <div className="footer-content">
          <span className="copyright"> Copyright 2020 Simi Development. Wszelkie prawa zastrzeżone. | Polityka Prywatności</span>
        </div>
        <ScrollToTop smooth style={scrollButton} component={<i className="fas fa-chevron-up"></i>}>
          <button className="scrollButton"></button>
        </ScrollToTop>
      </footer>
    </Router>
  );
}

export default App;

const scrollButton = {
  width: "50px",
  height: "50px",
  border: "3px solid white",
  backgroundColor: "#1A1A1D",
  color: "white",
  borderRadius: "50%",
  outline: "none",
  boxShadow: "none"
}