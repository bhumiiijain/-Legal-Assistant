 import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/Aboutus';
import Cards from './Components/Cards';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeneralPage from'./Components/GeneralPage';
import FamilyPage from'./Components/FamilyPage';
import WorkPage from'./Components/WorkPage';
import BusinessPage from'./Components/BusinessPage';
import ImmigrationPage from'./Components/ImmigrationPage';
import TaxPage from'./Components/TaxPage';
import RealEstatePage from'./Components/RealEstatePage';
import Features from './Components/Features';
import UploadDocuments from './Components/UploadDocuments';
import LegalAdvice from './Components/LegalAdvice'
import Agreement from './Components/Agreement'
import LegalForms from './Components/LegalForms'
import LegalPrecesion from './Components/LegalPrecesion'
import RightsOverview from './Components/RightsOverview'




function Home() {
  return (
    <div className='content'>
      <SearchBar />
      <Cards/> 
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<ContactForm />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/GeneralPage"element={<GeneralPage/>}/>
          <Route path="/FamilyPage"element={<FamilyPage/>}/>
          <Route path="/BusinessPage"element={<BusinessPage/>}/>
          <Route path="/WorkPage"element={<WorkPage/>}/>
          <Route path="/TaxPage"element={<TaxPage/>}/>
          <Route path="/ImmigrationPage"element={<ImmigrationPage/>}/>
          <Route path="/RealEstatePage"element={<RealEstatePage/>}/>
          <Route path="/Features"element={<Features/>}/>
          <Route path="/UploadDocuments"element={<UploadDocuments/>}/>
          <Route path="/LegalAdvice"element={<LegalAdvice/>}/>
          <Route path="/LegalPrecesion"element={<LegalPrecesion/>}/>
          <Route path="/LegalForms"element={<LegalForms/>}/>
          <Route path="/RightsOverview"element={<RightsOverview/>}/>
          <Route path="/Agreement"element={<Agreement/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;