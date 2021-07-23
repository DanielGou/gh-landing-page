import './App.css';

import Header from './components/Header';
import Form from "./components/Form"

import landingPicture from "./assets/landingPicture.jpg"

function App() {
  return (
    <div className="App">
      <Header/>
      <img id="landingPicture" src={landingPicture} alt=""/>
      <Form/>
    </div>
  );
}

export default App;
