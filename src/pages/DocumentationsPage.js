import "../styles/doc-cards.css";
import { GrDocumentPdf } from "react-icons/gr";
import projectProposal from "../Documents/Project Proposal.pdf";
import projectSpecificationsReport from "../Documents/Project Specifications Report.pdf";
import analysisReport from "../Documents/Analysis Report.pdf";
import highLevelDesignReport from "../Documents/High-Level Design Report.pdf";
import lowLevelDesignReport from "../Documents/venator-LLDReport.pdf";

const DocumentationsPage = () => (
  <>
    <div className="doc-cards docs-page-anim">
      <a
        className="doc-link"
        href={projectProposal}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>Project Proposal</b>
            </h4>
          </div>
        </div>
      </a>

      <a
        className="doc-link"
        href={projectSpecificationsReport}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>Project Specifications Report</b>
            </h4>
          </div>
        </div>
      </a>

      <a
        className="doc-link"
        href={analysisReport}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>Project Analysis Report</b>
            </h4>
          </div>
        </div>
      </a>

      <a
        className="doc-link"
        href={highLevelDesignReport}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>High-Level Design Report</b>
            </h4>
          </div>
        </div>
      </a>

      <a
        className="doc-link"
        href={lowLevelDesignReport}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "200px", height: "200px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>Low-Level Design Report</b>
            </h4>
          </div>
        </div>
      </a>
    </div>

    {/* <iframe className='' src={projectProposal} height="100%" width="100%" title="Project Proposal"></iframe> */}
  </>
);

export default DocumentationsPage;
