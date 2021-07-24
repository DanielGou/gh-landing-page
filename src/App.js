import './App.css';

import Header from './components/Header';
import Form from "./components/Form"
import Card from './components/Card';

import landingPicture from "./assets/landingPicture.jpg"

function App() {
  return (
    <div className="App">
      <Header/>

      <img id="landingPicture" src={landingPicture} alt=""/>
      
      <div>
        <Form/>
        <div className='title'>Desenvolvimento de produtos Digitais</div>
        <div>Brands are built based on the DNA of the companies, while respecting</div>
      </div>

      
      
      <div>
        Brands are built based on the DNA of the companies, while respecting its values and principles. 
        They are built od strategic positioning and through the true identification with people both inside and outside the enterprise.
        Our role is to find the purpose of your brand in this world and thus walk relevant and consistent way by qualifies execution of branding all touch points of your brand and so occupy a place only your on the market, and especially in the people's hearts.
      </div>
      
      <div className="title">Como nós ajudamos</div>
      <div id="CardComponents">
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
        <Card title="Lorem ipsum dolor sit amet, consectetur eli" text="Lorem ipsum dolor sit ame tur luctt, consectetur adipiscing elit. Curabitur luctus lorem eget ante dignissim venenatis."/>
      </div>
      <button>Entre em contato</button>


    </div>
  );
}

export default App;
