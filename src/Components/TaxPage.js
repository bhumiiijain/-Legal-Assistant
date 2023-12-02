import React, { useState } from 'react';
import './Tax.css'; 

const jsonData = {
  "data": [
    {
      "question": "What are the key components of personal income tax?",
      "answer": "Key components of personal income tax include taxable income, deductions, credits, and tax rates. Consult with a tax professional to understand how these components apply to your specific financial situation and optimize your tax liability."
    },
    {
      "question": "How can I minimize my tax liability as a small business owner?",
      "answer": "Minimizing tax liability as a small business owner involves strategic tax planning, proper record-keeping, taking advantage of available deductions, and structuring business transactions efficiently. Consult with a tax advisor or accountant to implement effective tax-saving strategies for your business."
    },
    {
      "question": "What is the process for filing a tax return?",
      "answer": "The process for filing a tax return involves gathering necessary financial documents, completing the required forms, and submitting the return to the appropriate tax authorities. Consult with a tax professional to ensure accurate and timely filing and to address any specific considerations related to your tax situation."
    },
    {
      "question": "How can I navigate tax implications of investment income?",
      "answer": "Navigating tax implications of investment income involves understanding capital gains, dividends, and interest income. Consult with a tax advisor to optimize your investment strategy, manage tax liability, and stay informed about tax laws affecting investment income."
    },
    {
      "question": "What are the tax implications of real estate transactions?",
      "answer": "Tax implications of real estate transactions include capital gains tax, property tax, and mortgage interest deductions. Consult with a tax professional to understand the tax consequences of buying, selling, or renting real estate and to optimize your tax position in real estate transactions."
    },
    {
      "question": "How can I handle tax audits and inquiries?",
      "answer": "Handling tax audits and inquiries involves providing accurate documentation, understanding the audit process, and seeking professional representation if necessary. Consult with a tax attorney or tax advisor to navigate tax audits, respond to inquiries, and ensure compliance with tax regulations."
    },
    {
      "question": "What are the tax considerations for charitable contributions?",
      "answer": "Tax considerations for charitable contributions involve understanding deductible donations, contribution limits, and proper documentation. Consult with a tax advisor to maximize the tax benefits of charitable giving and ensure compliance with tax regulations governing charitable contributions."
    },
    {
      "question": "How can I plan for estate and inheritance taxes?",
      "answer": "Planning for estate and inheritance taxes involves understanding exemption limits, implementing gifting strategies, and considering trusts. Consult with an estate planning attorney and a tax professional to develop a comprehensive plan that minimizes estate and inheritance tax liability."
    },
    {
      "question": "What are the tax implications of business expenses?",
      "answer": "Tax implications of business expenses include deductible expenses, depreciation, and business tax credits. Consult with a tax advisor or accountant to identify eligible business expenses, maximize tax deductions, and ensure compliance with tax laws governing business expenses."
    },
    {
      "question": "How can I stay informed about changes in tax laws?",
      "answer": "Staying informed about changes in tax laws involves regularly monitoring updates from tax authorities, attending tax seminars, and consulting with tax professionals. Work with a tax advisor to stay current on tax regulations and adjust your tax strategy accordingly."
    }

  ]
}

function Tax() {
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

export default Tax;