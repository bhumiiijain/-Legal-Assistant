import React from 'react';

function ContactForm() {
    const headingStyle = {
        color: 'Black' // Set the text color to white
    };
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <h2 style={headingStyle}>Contact Us</h2>
                </div>
                <div className="col-md-7">
                    <form className="row g-3 my-3">
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label" style={headingStyle}>Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputState" className="form-label" style={headingStyle}>State</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Enter your State" />
                            
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputCity" className="form-label" style={headingStyle}>City</label>
                            <input type="text" className="form-control" id="inputCity" placeholder="Enter your City" />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="validationTextarea" className="form-label" style={headingStyle}>Comment</label>
                            <textarea className="form-control" id="validationTextarea" placeholder="Comment here" required></textarea>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck" style={headingStyle}>
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;