import React from "react";
import "./Timeline.css";
const Timeline = () => {
  return (
    <React.Fragment>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: "70px",
          marginBottom: "10px",
        }}
      >
        Timeline
      </h1>
      <div class='timeline'>
        <div class='container left'>
          <div class='content'>
            <h2>2007-2019</h2>
            <p>
              I had a privilege to do my entire schooling from the esteemed
              institute "Amrita Vidyalayam" which is governed by the Amrita
              Vidhya Peetam Trust where traditional culture is imbibed along
              with the elite education.{" "}
            </p>
          </div>
        </div>
        <div class='container right'>
          <div class='content'>
            <h2>2019 - Till Date</h2>
            <p>
              I was rewarded for the efforts put forwarded in the form of
              getting admission in subject of my liking{" "}
              <strong>
                Computer Science with Specialisation in Cloud Computing
              </strong>{" "}
              in a premiere institution of my choice{" "}
              <strong>
                SRM Institute of Science & Technology- Kattankulthur
              </strong>{" "}
              which is ranked equal as one of the best by NIRF.
            </p>
          </div>
        </div>
        <div class='container left'>
          <div class='content'>
            <h2>2019 - Ongoing</h2>
            <p>
              Since my first semester, I have been an Active Technical Associate
              with Microsoft Club, it is an opportunity only for one of the few
              handpicked suitable students.{" "}
            </p>
          </div>
        </div>
        {/* <div class='container right'>
          <div class='content'>
            <h2>2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class='container left'>
          <div class='content'>
            <h2>2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class='container right'>
          <div class='content'>
            <h2>2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Timeline;
