import React from "react";
import { resumeData } from "../data.js";

function Resume() {
  return (
    <div className="resume-container">
      {resumeData.map((item) => {
        return (
          <>
            <div className="titles">
              <h2>{item.type}</h2>
              <div
                style={{
                  width: "640px",
                  borderTop: "3px solid #00b0ff",
                }}
              ></div>
            </div>
            <div className="info">
              <div className="infoSection">
                <p>⚪{item.companyName1}</p>
                <span>
                  <p>{item.date1}</p>
                </span>
              </div>
              <p style={{ marginBottom: "30px" }}>{item.firstAbout}</p>
              <div className="infoSection">
                <p>⚪{item.companyName2}</p>

                <span>
                  <p>{item.date2}</p>
                </span>
              </div>
              <p style={{ marginBottom: "20px" }}>{item.secondAbout}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Resume;