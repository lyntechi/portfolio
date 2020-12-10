import React from "react";
import { resumeData } from "../data.js";

function Resume() {
  return (
    <div className="resume-container" id="resume">
      
      {resumeData.map((item) => {
        return (
          <>
            <div className="titles">
              <h2>{item.type}</h2>
              <div
                style={{
                  width: "640px",
                  borderTop: "3px solid #cf556c",
                }}
              ></div>
            </div>
            <div className="info">
              <div className="infoSection">
                <p>{item.companyName1}</p>
                <span>
                  <p>{item.date1}</p>
                </span>
              </div>
              <p style={{ marginBottom: "30px" }}>{item.firstAbout}</p>
              <div className="infoSection">
                <p>{item.companyName2}</p>

                <span>
                  <p>{item.date2}</p>
                </span>
              </div>
              <p style={{ marginBottom: "20px" }}>{item.secondAbout}</p>
            </div>
          </>
        );
      })}
      <h2 className="pdfTitle">
        <a
          href="https://drive.google.com/file/d/1bYqggQutJxwptM--w-s-9XS0SlCyAmY9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open Resume As PDF{" "}
        </a>
      </h2>
    </div>
  );
}

export default Resume;
