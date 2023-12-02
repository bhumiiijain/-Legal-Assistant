import React from 'react';
import styles from './Features.css'; 

const Features = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1> Legal Features</h1>
      </header>

      {/* Bootstrap Carousel */}
      <div id="categoryCarousel" className={`carousel slide ${styles.categoryCarousel}`} data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className={`carousel-item ${styles.categoryItem} active`}>
            <div className={styles.category}>
              <img src="https://www.pngitem.com/pimgs/m/470-4707476_know-your-rights-png-transparent-png.png" alt="Know Your Rights" />
              <h2>KNOW YOUR RIGHTS</h2>
              <ul>
              <li>-Right to freedom of speech and expression</li>
              <li>-Right to equality before the law</li>
              <li>-Right to privacy and personal liberty</li>
              <li>-Right to education</li>
      {/* Add more bullet points as needed */}
    </ul>
              <a href="/RightsOverview">Rights Overview</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Z0hnmqwL-Pa77GWuxUBx8qvXeYp5oYCv2aR6EQN3FeHjbYhP8u8UOSuD6MywJOSLUkI&usqp=CAU" alt="Upload Your Documents" />
              <h2>UPLOAD YOUR DOCUMENTS</h2>
              <a href="/UploadDocuments">Upload here</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="data:image/jpeg;base64,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" alt="Legal Writing" />
              <h2>LEGAL WRITING</h2>
              <a href="/LegalPrecesion">Legal Precision?</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoKv2NqWZSN0Ev6UFw11vkrAZAzeV0C2ieLXsYVj5-3ysw_e81MlRQzc-GKzk8FAk5po&usqp=CAU" alt="Forms and Waivers" />
              <h2>FORMS AND WAIVERS</h2>
              <a href="/LegalForms">Browse/Explore Forms</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://www.freeiconspng.com/uploads/contract-icon-16.png" alt="Contract Drafting" />
              <h2>CONTRACT DRAFTING</h2>
              <a href="/LegalAgreement">Create Your Agreement</a>
            </div>
          </div>

          <div className={`carousel-item ${styles.categoryItem}`}>
            <div className={styles.category}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Z0hnmqwL-Pa77GWuxUBx8qvXeYp5oYCv2aR6EQN3FeHjbYhP8u8UOSuD6MywJOSLUkI&usqp=CAU" alt="Legal Consultations" />
              <h2>LEGAL CONSULTATIONS</h2>
              <a href="/LegalAdvice">Seek Legal Advice</a>
            </div>
          </div>

          {/* Include the remaining carousel items similarly */}

        </div>

        {/* Carousel Control Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Features;
