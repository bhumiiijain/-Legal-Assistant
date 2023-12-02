import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <section>
            <div className="container-card">
                <Link to="/GeneralPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/8b/8a/be/8b8abe939109d0c1129ab1406d1e04ff.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                General
                                <br />
                                <span>Traffic Ticket, Car Accidents, Debt Collection</span>
                            </h3>
                        </div>
                    </div>
                </Link>
                
                {/* Repeat the above structure for other cards with their respective paths */}
                
                <Link to="/FamilyPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/b8/fc/6f/b8fc6fd2321c142671be102f05d78fe9.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Family
                                <br />
                                <span>Divorce, Alimony, Adoption, Support, Name Changes</span>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link to="/WorkPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/85/b6/57/85b657c713865202d178d7903bfd4358.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Work
                                <br />
                                <span>Rights, Termination, Harassment, Wages, Complaints</span>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link to="/BusinessPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/09/d5/56/09d5560fd1219b4d337609d24112b392.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Business
                                <br />
                                <span>Contracts, hiring, leases, data privacy, dissolution, disputes</span>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link to="/TaxPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/85/ca/c3/85cac3a37adfa3681606d0494089f4ae.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Tax
                                <br />
                                <span>Deductions,self-employment,rentals,disputes</span>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link to="/ImmigrationPage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/25/fc/97/25fc9767b075888f1d1031936651cd1f.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Immigration
                                <br />
                                <span>Visas, extensions, work, residency, citizenship, appeals</span>
                            </h3>
                        </div>
                    </div>
                </Link>

                <Link to="/RealEstatePage" className="card">
                    <div className="content">
                        <div className="img8x">
                            <img
                                src="https://i.pinimg.com/564x/4a/b0/e7/4ab0e702101a3c7bf72cea37f84de57b.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                        </div>
                        <div className="content8x">
                            <h3>
                                Real Estate
                                <br />
                                <span>Buying, disputes, repairs, boundaries, rentals, HOA</span>
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default Cards;