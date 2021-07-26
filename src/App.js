import './App.css';

import Header from './components/Header';
import Form from "./components/Form"
import Card from './components/Card';
import Case from './components/Case'
import Footer from './components/Footer';

import landingPicture from "./assets/landingPicture.jpg"
import seta from "./assets/seta.png"

function App() {
  return (
    <div className="App">
      <Header/>

      <img style={{width: "100vw"}} src={landingPicture} alt=""/>
      
      <div style={{padding: "100px"}}>
        <Form/>
        
        <div className='title'>Desenvolvimento de produtos Digitais</div>
        <div>Brands are built based on the DNA of the companies, while respecting</div>
      </div>

      
      
      <div id="textLanding">
        Brands are built based on the DNA of the companies, while respecting its values and principles. 
        They are built od strategic positioning and through the true identification with people both inside and outside the enterprise.
        Our role is to find the purpose of your brand in this world and thus walk relevant and consistent way by qualifies execution of branding all touch points of your brand and so occupy a place only your on the market, and especially in the people's hearts.
      </div>
      
      <div className="blockCards">
        <div className="title" style={{padding: "0 30px"}}>Como nós ajudamos</div>
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

      <div className="title" style={{padding: "0 5%", marginTop: "100px"}}>Cases</div>
	  <div className="cases">
		  <Case title="Godoc" text="Godoc is an app for scheduling of medical appointments." topics="branding, interaction" theme="blue"/>
		  <Case title="Gerencial" text="Gerencial is an office of auditing, accounting and consulting." topics="branding, interaction" theme="image"/>
		  <Case title="Vetherapy" text="Vetherapy is a San Francisco startup. Focused on therapies from stem cells." topics="branding, interaction" theme="grey"/>
	  </div>

    <div className="seta">
      <img src={seta} alt="seta"/>
      <div className="title">All projects</div> 
    </div>

    <Footer/>
    </div>
  );
}

export default App;
