import React, { useState } from 'react';
import './Work.css'; 

const jsonData = {
  "data": [
    {
      "question": "How can I negotiate my salary during a job offer?",
      "answer": "Negotiating your salary during a job offer involves researching industry standards, highlighting your skills and experience, and expressing your expectations professionally. Consult with a career advisor or mentor for guidance on effective salary negotiation strategies."
    },
    {
      "question": "What are the key components of a strong resume?",
      "answer": "Key components of a strong resume include a clear and concise summary, relevant work experience, skills, and achievements. Consult with a professional resume writer or career counselor to craft a resume that effectively showcases your qualifications and experiences."
    },
    {
      "question": "How can I prepare for a job interview?",
      "answer": "Preparing for a job interview involves researching the company, practicing common interview questions, and developing thoughtful responses. Consult with a career coach or mentor for interview tips and strategies to make a positive impression during the interview process."
    },
    {
      "question": "What are the legal considerations for employment contracts?",
      "answer": "Legal considerations for employment contracts include terms of employment, compensation, benefits, and termination clauses. Consult with an employment attorney to review and negotiate employment contracts to ensure fair and legally compliant terms for both the employer and employee."
    },
    {
      "question": "How can I advance my career through professional development?",
      "answer": "Advancing your career through professional development involves pursuing additional education, obtaining certifications, and participating in industry-related activities. Consult with a career advisor or mentor to create a personalized professional development plan that aligns with your career goals."
    },
    {
      "question": "What are the legal rights of employees in the workplace?",
      "answer": "Legal rights of employees in the workplace include protection from discrimination, a safe working environment, and fair compensation. Consult with an employment attorney to understand your rights, address workplace issues, and navigate legal considerations related to employment."
    },
    {
      "question": "How can I effectively manage workplace stress?",
      "answer": "Effectively managing workplace stress involves setting boundaries, practicing self-care, and seeking support when needed. Consult with a mental health professional or workplace counselor for strategies to cope with stress and maintain a healthy work-life balance."
    },
    {
      "question": "What are the considerations for transitioning to a new career?",
      "answer": "Considerations for transitioning to a new career include identifying transferable skills, gaining relevant experience, and networking in the desired industry. Consult with a career coach or mentor to develop a strategic plan for a successful career transition."
    },
    {
      "question": "How can I navigate workplace conflicts and interpersonal issues?",
      "answer": "Navigating workplace conflicts involves effective communication, seeking resolution, and, if necessary, involving HR or a mediator. Consult with a workplace conflict resolution specialist or HR professional to address interpersonal issues and promote a positive work environment."
    },
    {
      "question": "What are the best practices for remote work and telecommuting?",
      "answer": "Best practices for remote work and telecommuting include setting up a dedicated workspace, establishing a routine, and utilizing communication tools effectively. Consult with remote work experts or employers with successful remote work programs for tips on maximizing productivity and work-life balance."
    }

  ]
}

function Work() {
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

export default Work;