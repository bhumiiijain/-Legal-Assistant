import React, { useState } from 'react';
import './RealEstate.css'; 

const jsonData = {
  "data": [
    {
      "question": "What are the legal steps to buying a house?",
      "answer": "The legal steps to buying a house include conducting due diligence, signing a purchase agreement, obtaining a home inspection, securing financing, and completing the closing process. Consult with a real estate attorney to navigate the legal aspects of the home buying process."
    },
    {
      "question": "How can I protect myself in a real estate transaction?",
      "answer": "To protect yourself in a real estate transaction, work with a qualified real estate agent, conduct thorough property inspections, review all documents carefully, and consult with a real estate attorney. An attorney can provide legal advice, review contracts, and ensure a smooth transaction."
    },
    {
      "question": "What are the legal considerations for selling a property?",
      "answer": "Legal considerations for selling a property include disclosing property defects, pricing the property appropriately, and preparing a legally binding sales contract. Consult with a real estate attorney to understand your obligations as a seller and navigate the legal aspects of the selling process."
    },
    {
      "question": "How can I resolve boundary disputes with neighbors?",
      "answer": "Resolving boundary disputes with neighbors involves reviewing property surveys, communicating effectively, and, if necessary, consulting with a real estate attorney. Legal professionals can provide guidance on property boundaries and help mediate or resolve disputes through legal channels."
    },
    {
      "question": "What is the process for commercial real estate leasing?",
      "answer": "The process for commercial real estate leasing involves negotiating lease terms, conducting due diligence on the property, and preparing a detailed lease agreement. Consult with a real estate attorney to ensure lease terms protect your interests and comply with relevant commercial real estate laws."
    },
    {
      "question": "How can I address zoning and land use issues?",
      "answer": "Addressing zoning and land use issues involves understanding local zoning regulations, obtaining necessary permits, and, if needed, seeking variances. Consult with a real estate attorney to navigate zoning and land use regulations, ensuring compliance with local laws and regulations."
    },
    {
      "question": "What are the legal considerations for real estate development projects?",
      "answer": "Legal considerations for real estate development projects include obtaining necessary permits, complying with zoning regulations, and addressing environmental impact assessments. Consult with a real estate attorney to navigate the legal complexities of real estate development and ensure compliance with all relevant laws."
    },
    {
      "question": "How can I handle landlord-tenant disputes?",
      "answer": "Handling landlord-tenant disputes involves reviewing lease agreements, understanding tenant rights, and following legal eviction processes if necessary. Consult with a real estate attorney to address disputes, ensure legal compliance, and seek resolutions through negotiation or legal channels."
    },
    {
      "question": "What are the legal implications of property easements?",
      "answer": "Property easements have legal implications related to access rights and land use restrictions. Consult with a real estate attorney to understand the impact of easements on property ownership, negotiate easement terms, and address any legal concerns related to easements."
    },
    {
      "question": "How can I navigate real estate investment legal considerations?",
      "answer": "Navigating real estate investment legal considerations involves understanding tax implications, complying with securities laws, and reviewing investment contracts. Consult with a real estate attorney to ensure legal compliance in real estate investment activities and protect your interests as an investor."
    }


  ]
}

function RealEstate() {
  const [searchValue, setSearchValue] = useState('');
  const [answer, setAnswer] = useState('');
  const [isContainerVisible, setContainerVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      findAnswer(searchValue);
      setContainerVisible(true);
    }
  };

  const findAnswer = (searchValue) => {
    let found = jsonData.data.find(item => item.question.toLowerCase() === searchValue.toLowerCase());
    if (found) {
      setAnswer(found.answer);
      setActiveIndex(null); // Reset active index when searching
    } else {
      setAnswer("Data not found");
    }
  };

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setAnswer(jsonData.data[index].answer);
  };

  return (
    <div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Anything You Want."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button className="srchbtn" onClick={() => { findAnswer(searchValue); setContainerVisible(true); }}>Search</button>
      </div>

      {isContainerVisible && (
        <div className='container-class' style={{ backgroundColor: 'grey', borderRadius: '20px' }}>
          <h5 style={{ color: 'black' }}>{answer}</h5>
        </div>
      )}

      <h1 className="General-title"> Frequently asked questions</h1>

      <div id="accordion">
        {jsonData.data.map((item, index) => (
          <div className={`accordion-item ${index === activeIndex ? 'active' : ''}`} key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index === activeIndex ? 'active' : ''}`}
                type="button"
                onClick={() => handleAccordionClick(index)}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === activeIndex ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-parent="#accordion"
            >
              <div className="accordion-body">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealEstate;