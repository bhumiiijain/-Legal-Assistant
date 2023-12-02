import React, { useState } from 'react';
import './General.css'; 

const jsonData = {
  "data": [
    {
      "question": "How do I respond to a legal summons?",
      "answer": "If you receive a legal summons, it's crucial to respond promptly. Consult with a lawyer to understand the nature of the summons and the appropriate course of action. Failure to respond may result in adverse legal consequences."
    },
    {
      "question": "What is the process for filing a lawsuit?",
      "answer": "To file a lawsuit, consult with a lawyer to assess the merits of your case. Draft a complaint outlining the facts and legal claims. File the complaint with the appropriate court and serve it on the opposing party. Follow the court procedures and attend hearings as required."
    },
    {
      "question": "How can I dispute a traffic ticket?",
      "answer": "To dispute a traffic ticket, gather evidence such as photographs or witness statements. Consult with a lawyer to understand the relevant traffic laws. Follow the instructions on the ticket for contesting it, which may include attending a court hearing or submitting a written explanation."
    },
    {
      "question": "What are the legal requirements for a valid contract?",
      "answer": "For a contract to be valid, it must include an offer, acceptance, consideration, legal capacity of the parties, and a lawful purpose. Consult with a lawyer to ensure your contracts meet all legal requirements and to draft contracts tailored to your specific needs."
    },
    {
      "question": "How can I protect my business from lawsuits?",
      "answer": "To protect your business from lawsuits, implement risk management strategies, comply with relevant laws and regulations, and have clear contracts and policies in place. Consult with a business attorney to assess and mitigate potential legal risks."
    },
    {
      "question": "What are my rights as a tenant?",
      "answer": "As a tenant, you have rights related to habitability, privacy, and protection from discrimination. Familiarize yourself with your lease agreement and consult with a tenant's rights attorney if you believe your rights are being violated."
    },
    {
      "question": "How can I navigate family law issues?",
      "answer": "Family law issues, such as divorce and child custody, can be complex. Consult with a family law attorney to understand your rights and options. Mediation or collaborative law may be considered before pursuing litigation."
    },
    {
      "question": "What steps should I take after a personal injury?",
      "answer": "After a personal injury, seek medical attention and document the incident. Consult with a personal injury attorney to assess your case. File a personal injury claim if necessary, and work with your attorney to negotiate a settlement or pursue litigation."
    },
    {
      "question": "How can I protect my assets through estate planning?",
      "answer": "Estate planning involves creating a will, establishing trusts, and designating beneficiaries. Consult with an estate planning attorney to ensure your assets are protected and your wishes are clearly documented for the distribution of your estate."
    },
    {
      "question": "What are the legal implications of a business partnership?",
      "answer": "A business partnership involves legal responsibilities and liabilities. Consult with a business attorney to draft a comprehensive partnership agreement, addressing issues such as profit-sharing, decision-making, and dispute resolution to avoid legal complications."
    }
  ]
}

function General() {
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

export default General;