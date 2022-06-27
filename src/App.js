import './App.css';
import gambar from './components/amanda.jpg';
import Navbar from "./Navbar";
import "react-bootstrap"
import "bootstrap"
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Image} from "react-bootstrap";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/Gallery">
                <Gallery/>
              </Route>
              <Route exact path="/Home">
                <Home/>
              </Route>
              <Route exact path="/Contact">
                <Contact/>
              </Route>
            </Switch>
          </div>
          <Image src={gambar}alt="" style={{height : "400px", width : "300px", margin : "20px"}}/>
          <div style={{fontWeight : "bold", fontSize : "50px", fontStyle : "oblique"}}>Welcome to My Profile</div>
          <div style={{fontWeight : "inherit", fontSize : "20px", fontStyle : "oblique"}}>Mahasiswa Teknik Informatika UIN SUSKA RIAU</div>
        </div>
      </Router>
  );
}
export default App;