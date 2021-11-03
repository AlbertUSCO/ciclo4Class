import { Button, Container, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/login.js"
import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <div className="App">

      <Navbar />
      <Login />

    </div>
  );
}

export default App;
