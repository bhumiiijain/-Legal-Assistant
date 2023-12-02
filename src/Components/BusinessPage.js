import React, { useState } from 'react';
import './Business.css'; 

const jsonData = {
  "data": [
    {
      "question": "What legal structure is best for my business?",
      "answer": "The best legal structure for your business depends on factors such as your business goals, size, and liability preferences. Options include sole proprietorship, partnership, LLC, and corporation. Consult with a business attorney to determine the most suitable structure for your specific situation."
    },
    {
      "question": "How can I protect my business name and logo?",
      "answer": "To protect your business name and logo, consider registering trademarks with the relevant authorities. Conduct thorough searches to ensure the availability of the desired name and logo. Consult with an intellectual property attorney to navigate the registration process and enforce your trademarks."
    },
    {
      "question": "What are the legal requirements for hiring employees?",
      "answer": "Legal requirements for hiring employees include compliance with labor laws, workplace safety regulations, and anti-discrimination laws. Draft clear employment contracts, establish workplace policies, and consult with an employment attorney to ensure compliance with all legal obligations."
    },
    {
      "question": "How can I draft effective contracts for my business?",
      "answer": "Drafting effective contracts involves clear and concise language, specifying terms, and addressing potential issues. Consult with a business attorney to create customized contracts for various purposes, such as client agreements, vendor contracts, and partnership agreements."
    },
    {
      "question": "What steps should I take to protect my business from lawsuits?",
      "answer": "To protect your business from lawsuits, implement risk management strategies, maintain proper documentation, and have clear contracts and policies in place. Consult with a business attorney to assess and mitigate potential legal risks specific to your industry and operations."
    },
    {
      "question": "How can I navigate business disputes and avoid litigation?",
      "answer": "Navigating business disputes involves negotiation, mediation, or arbitration before resorting to litigation. Establish clear dispute resolution mechanisms in contracts and consult with a business attorney to explore alternative dispute resolution methods and avoid costly litigation."
    },
    {
      "question": "What are the legal requirements for online business operations?",
      "answer": "Legal requirements for online business operations include compliance with e-commerce laws, data protection regulations, and online consumer protection laws. Consult with a business attorney to ensure your online business is legally compliant and to address specific legal considerations for online operations."
    },
    {
      "question": "How can I protect my business intellectual property?",
      "answer": "To protect business intellectual property, register trademarks, copyrights, and patents as applicable. Implement confidentiality and non-disclosure agreements. Consult with an intellectual property attorney to develop a comprehensive strategy for protecting and enforcing your business intellectual property rights."
    },
    {
      "question": "What are the legal implications of business partnerships?",
      "answer": "Business partnerships have legal implications related to profit-sharing, decision-making, and liability. Draft a comprehensive partnership agreement with the assistance of a business attorney to address these aspects and mitigate potential legal complications in the partnership."
    },
    {
      "question": "How can I comply with tax regulations for my business?",
      "answer": "To comply with tax regulations, maintain accurate financial records, file tax returns on time, and stay informed about tax law changes. Consult with a tax attorney or accountant to ensure your business meets all tax obligations and to explore tax planning strategies."
    }

  ]
}

function Business() {
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

      <h1 className="Business-title"> Frequently asked questions</h1>

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

export default Business;