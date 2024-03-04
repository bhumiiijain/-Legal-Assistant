import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/Aboutus';
import Cards from './Components/Cards';
import ChatBot from './Components/ChatBot';


import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import GeneralPage from'./Components/GeneralPage';
import FamilyPage from'./Components/FamilyPage';
import WorkPage from'./Components/WorkPage';
import BusinessPage from'./Components/BusinessPage';
import ImmigrationPage from'./Components/ImmigrationPage';
import TaxPage from'./Components/TaxPage';
import RealEstatePage from'./Components/RealEstatePage';
import OurServices from './Components/OurServices';
import UploadDocuments from './Components/UploadDocuments';
import LegalAdvice from './Components/LegalAdvice';
// import Agreement from './Components/Agreement';
import LegalForms from './Components/LegalForms';
import LegalPrecesion from './Components/LegalPrecesion';
// import RightsOverview from './Components/RightsOverview';
import FormsandWaivers from './Components/FormsandWaivers';
import ImportantLinks from './Components/ImportantLinks';
import LiveNews from './Components/LiveNews';
import KnowYourRights from './Components/KnowYourRights';
import Login from './Login';
import Chatbotpage from './Components/Chatbotpage';
import Signup from './Signup';
import { useAuthContext } from './hooks/useAuthContext'
import PopUpMessage from './Components/PopUpMessage';




function Home() {
  return (
    <div className='content'>
       
      <Cards/>
      <PopUpMessage/>

    </div>
  );
}

function App() {
  const{user} =useAuthContext()
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/GeneralPage"element={<GeneralPage/>}/>
          <Route path="/FamilyPage"element={<FamilyPage/>}/>
          <Route path="/BusinessPage"element={<BusinessPage/>}/>
          <Route path="/WorkPage"element={<WorkPage/>}/>
          <Route path="/TaxPage"element={<TaxPage/>}/>
          <Route path="/ImmigrationPage"element={<ImmigrationPage/>}/>
          <Route path="/RealEstatePage"element={<RealEstatePage/>}/>
          <Route path="/OurServices"element={<OurServices/>}/>
          <Route path="/UploadDocuments"element={<UploadDocuments/>}/>
          <Route path="/LegalAdvice"element={<LegalAdvice/>}/>
          <Route path="/LegalPrecesion"element={<LegalPrecesion/>}/>
          <Route path="/LegalForms"element={<FormsandWaivers/>}/>
          {/* <Route path="/RightsOverview"element={<RightsOverview/>}/> */}
          {/* <Route path="/Agreement"element={<Agreement/>}/> */}
          <Route path="/ChatBot"element={<ChatBot/>}/>
          <Route path="/ImportantLinks" element={<ImportantLinks/>}/>
          <Route path="/LiveNews" element={<LiveNews/>}/>
          <Route path="/KnowYourRights" element={<KnowYourRights/>}/>
          <Route path="/ChatBot" element={<SearchBar/>}/>
          <Route path='/login' element={!user?<Login/>:<Navigate to = "/OurServices"/>}></Route>
          <Route path='/Signup' element={!user?<Signup/>:<Navigate to = "/signup"/>}></Route>
         
      
          
        </Routes>
        <Chatbotpage/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;