import React, { useState } from 'react';
import './Immigration.css'; 

const jsonData = {
  "data": [
    {
      "question": "What is the process for obtaining a work visa?",
      "answer": "The process for obtaining a work visa involves employer sponsorship, filing a petition with the appropriate immigration authorities, and obtaining approval. Consult with an immigration attorney to navigate the specific requirements for the desired work visa and address any legal considerations."
    },
    {
      "question": "How can I apply for permanent residency (Green Card)?",
      "answer": "Applying for permanent residency involves sponsorship by a family member or employer, or through other eligible categories. Consult with an immigration attorney to understand the eligibility criteria, required documentation, and navigate the application process for obtaining a Green Card."
    },
    {
      "question": "What are the legal requirements for family-based immigration?",
      "answer": "Legal requirements for family-based immigration include sponsorship by a U.S. citizen or permanent resident family member, filing petitions, and meeting relationship criteria. Consult with an immigration attorney to understand the specific requirements for family-based immigration and navigate the application process."
    },
    {
      "question": "How can I extend my visa stay in the U.S.?",
      "answer": "To extend your visa stay in the U.S., file a timely application for an extension with the appropriate immigration authorities. Consult with an immigration attorney to understand the eligibility criteria, required documentation, and potential legal considerations for extending your visa stay."
    },
    {
      "question": "What are the legal implications of overstaying a visa?",
      "answer": "Overstaying a visa can have serious legal consequences, including deportation and future visa ineligibility. Consult with an immigration attorney if you have overstayed your visa to explore options for legal status correction or resolution of immigration issues."
    },
    {
      "question": "How can I obtain U.S. citizenship?",
      "answer": "Obtaining U.S. citizenship involves meeting eligibility criteria, filing an application, attending an interview, and passing a naturalization test. Consult with an immigration attorney to ensure compliance with citizenship requirements and navigate the naturalization process."
    },
    {
      "question": "What are the legal considerations for asylum applications?",
      "answer": "Asylum applications involve proving a well-founded fear of persecution in the home country. Consult with an immigration attorney to understand the legal considerations, eligibility criteria, and documentation required for a successful asylum application in the U.S."
    },
    {
      "question": "How can I address visa denials or immigration appeals?",
      "answer": "Addressing visa denials or immigration appeals involves understanding the reasons for denial, preparing a strong appeal, and presenting a compelling case. Consult with an immigration attorney to assess the denial, explore appeal options, and navigate the appeals process."
    },
    {
      "question": "What are the legal options for undocumented immigrants?",
      "answer": "Legal options for undocumented immigrants may include Deferred Action for Childhood Arrivals (DACA), Temporary Protected Status (TPS), or other relief programs. Consult with an immigration attorney to explore available options and address the specific circumstances of undocumented individuals."
    },
    {
      "question": "How can I navigate the immigration process for employment-based sponsorship?",
      "answer": "Navigating the immigration process for employment-based sponsorship involves labor certification, filing petitions, and obtaining approval from immigration authorities. Consult with an immigration attorney to understand the specific requirements for employment-based immigration and address legal considerations."
    }

  ]
}
function Immigration() {
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

export default Immigration;