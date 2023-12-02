import React, { useState } from 'react';
import './Family.css'; 

const jsonData = {
  "data": [
    {
      "question": "What is the process for filing for divorce?",
      "answer": "To file for divorce, consult with a family law attorney to understand the legal requirements in your jurisdiction. Prepare the necessary documents, including the divorce petition, and file them with the appropriate court. Follow the court procedures and attend hearings as required."
    },
    {
      "question": "How is child custody determined in divorce cases?",
      "answer": "Child custody is determined based on the best interests of the child. Factors considered include the child's age, health, relationships with parents, and the ability of each parent to provide a stable environment. Consult with a family law attorney to navigate custody issues."
    },
    {
      "question": "What are my rights as a non-custodial parent?",
      "answer": "Non-custodial parents have visitation rights and the right to be involved in major decisions affecting the child's life. Consult with a family law attorney to ensure your rights are protected and to address any concerns about visitation or custody arrangements."
    },
    {
      "question": "How can I modify child support payments?",
      "answer": "To modify child support payments, file a petition with the court demonstrating a significant change in circumstances, such as a change in income or financial situation. Consult with a family law attorney to navigate the modification process."
    },
    {
      "question": "What is the process for adopting a child?",
      "answer": "The process for adopting a child involves home studies, background checks, and legal paperwork. Consult with an adoption attorney to understand the specific requirements in your jurisdiction and to navigate the adoption process smoothly."
    },
    {
      "question": "How can I protect my assets in a prenuptial agreement?",
      "answer": "To protect assets in a prenuptial agreement, both parties must fully disclose their financial information, and the agreement must be entered into voluntarily. Consult with a family law attorney to draft a comprehensive prenuptial agreement that meets legal requirements."
    },
    {
      "question": "What are the legal implications of domestic violence?",
      "answer": "Domestic violence has serious legal implications. If you are a victim, seek help from law enforcement and obtain a restraining order. If you are accused, consult with a family law attorney to address the legal consequences and seek guidance on legal protection."
    },
    {
      "question": "How is spousal support determined in divorce cases?",
      "answer": "Spousal support, or alimony, is determined based on factors such as the length of the marriage, each spouse's financial situation, and contributions to the marriage. Consult with a family law attorney to understand the factors that may affect spousal support decisions."
    },
    {
      "question": "What legal steps should I take in case of child abduction by a parent?",
      "answer": "In case of child abduction by a parent, take immediate legal action. Consult with a family law attorney to file a petition for the return of the child and seek assistance from law enforcement and international authorities if necessary."
    },
    {
      "question": "How can I navigate the legal aspects of surrogacy?",
      "answer": "Surrogacy involves complex legal considerations. Consult with a family law attorney to understand the legal requirements, rights, and responsibilities of all parties involved in the surrogacy process. Ensure that all agreements are legally binding."
    }
  ]
}
      
      
      

  


function Family() {
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

export default Family;