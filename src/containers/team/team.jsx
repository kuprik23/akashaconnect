import React from 'react';
import './team.css';
import Shant from '../../assets/shant.png';
import Person1 from '../../assets/person1.png';
import Martin from '../../assets/martin.png';

const Team = () => (
  <div>
    {/* <h4 className="note text-danger text-center" /> */}
    <section>
      <div className="container" id="team">
        <div className="row flex-center sm-no-flex">
          <div className="pull-right sm-no-float col-md-8">
            <ul className="team-members">
              {/* <!-- single member row starts --> */}
              <li className="clearfix">
                <div className="member-details">
                  <div>
                    <img src={Person1} alt="UI Designer" />
                    <div className="member-info">
                      <h3>Alan Solis</h3>
                      <p>CMO</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                    <img src={Shant} alt="UI Designer" />
                    <div className="member-info">
                      <h3>Shant Pourian</h3>
                      <p>CBO</p>
                    </div>
                  </div>
                </div>

                <div className="member-details">
                  <div>
                    <img
                      src={Martin}
                      alt="CMO"
                    />
                    <div className="member-info">
                      <h3>Martin Kuprik</h3>
                      <p>CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- /single member row ends --> */}
            </ul>
            {/* <!-- /end team-photos --> */}
          </div>
          <div className="pull-left col-md-4 sm-text-center">
            <div className="team-overview">
              <h2>Who Are We?</h2>
              <p>
                <div>
                  Akasha Metaverse Team marries deep VR industry experience with
                  passion for virtual social and its users. We aim to combine
                  Virtual world with professional-quality content. Akasha
                  Metaverse Team brings a wealth of experience to the space, to
                  build highly-engaging experiences in the metaverse.
                </div>
              </p>
            </div>
          </div>
          {/* <!-- /end col-md-4 --> */}
        </div>
        {/* <!-- /end row --> */}
      </div>
      {/* <!-- /end container --> */}
    </section>
  </div>
);

export default Team;
